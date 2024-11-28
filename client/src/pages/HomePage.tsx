import illustration from "@/assets/illustration.png"
import FormComponent from "@/components/forms/FormComponent"
import Footer from "@/components/common/Footer";

function HomePage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-6">
            <div className="my- flex h-full min-w-full flex-col items-center justify-evenly sm:flex-row ">
                <div className="flex w-full items-center justify-center sm:w-1/2">
                    <FormComponent />
                </div>
                <div className="flex w-full animate-up-down justify-center sm:w-1/2 ">
                    <img
                        src={illustration}
                        alt="Code Sync Illustration"
                        className="mx-auto sm:w-[500px]"
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage