import axiosInstance from "@/api/"
import { Language, RunContext as RunContextType } from "@/types/run"
import langMap from "lang-map"
import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react"
import toast from "react-hot-toast"
import { useFileSystem } from "./FileContext"

const RunCodeContext = createContext<RunContextType | null>(null)

export const useRunCode = () => {
    const context = useContext(RunCodeContext)
    if (context === null) {
        throw new Error(
            "useRunCode must be used within a RunCodeContextProvider",
        )
    }
    return context
}

const RunCodeContextProvider = ({ children }: { children: ReactNode }) => {
    const { activeFile } = useFileSystem()
    const [input, setInput] = useState<string>("")
    const [output, setOutput] = useState<string>("")
    const [isRunning, setIsRunning] = useState<boolean>(false)
    const [supportedLanguages, setSupportedLanguages] = useState<Language[]>([])
    const [selectedLanguage, setSelectedLanguage] = useState<Language>({
        id: 0,
        name: "",
        is_archived: false,
        source_file: "",
    })

    useEffect(() => {
        const fetchSupportedLanguages = async () => {
            try {
                console.log("enter")
                const languages = await axiosInstance.get("/languages")
                setSupportedLanguages(languages.data)

            } catch (error: any) {
                toast.error("Failed to fetch supported languages")
                if (error?.response?.data) console.error(error?.response?.data)
            }
        }

        fetchSupportedLanguages()
    }, [])

    // Set the selected language based on the file extension or default to the first supported language
    useEffect(() => {
        if (supportedLanguages.length === 0) return

        const extension = activeFile?.name?.split(".").pop()
        if (extension) {
            const languageName = langMap.languages(extension)
            const matchedLanguage = supportedLanguages.find((lang) =>
                languageName.some((name) => lang.name.toLowerCase().includes(name)),
            )
            if (matchedLanguage) {
                setSelectedLanguage(matchedLanguage)
                return
            }
        }

        if (selectedLanguage.id === 0) {
            setSelectedLanguage(supportedLanguages[0])
        }
    }, [activeFile?.name, supportedLanguages, selectedLanguage.id])

    const runCode = async () => {
        try {
            if (!selectedLanguage || selectedLanguage.id === 0) {
                return toast.error("Please select a language to run the code")
            } else if (!activeFile) {
                return toast.error("Please open a file to run the code")
            } else {
                toast.loading("Running code...")
            }

            setIsRunning(true)

            const response = await axiosInstance.post("/submissions", {
                source_code: activeFile.content,
                language_id: selectedLanguage.id,
                stdin: input,
            })
            const token = response.data.token

            // Poll for result
            let result
            do {
                await new Promise(resolve => setTimeout(resolve, 1000))
                const res = await axiosInstance.get(`/submissions/${token}`)
                result = res.data
            } while (result.status.id <= 2) // 1=In Queue, 2=Processing

            if (result.stderr) {
                setOutput(result.stderr)
            } else {
                setOutput(result.stdout)
            }
            setIsRunning(false)
            toast.dismiss()
        } catch (error: any) {
            console.error(error.response.data)
            console.error(error.response.data.error)
            setIsRunning(false)
            toast.dismiss()
            toast.error("Failed to run the code")
        }
    }

    return (
        <RunCodeContext.Provider
            value={{
                setInput,
                output,
                isRunning,
                supportedLanguages,
                selectedLanguage,
                setSelectedLanguage,
                runCode,
            }}
        >
            {children}
        </RunCodeContext.Provider>
    )
}

export { RunCodeContextProvider }
export default RunCodeContext