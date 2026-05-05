import axios, { AxiosInstance } from "axios"

const BaseUrl ="https://unifiedcode-sever.onrender.com"
// GET  http://localhost:5050/api/languages
// POST http://localhost:5050/api/submissions
// GET  http://localhost:5050/api/submissions/{token}


const instance: AxiosInstance = axios.create({
    baseURL: BaseUrl,
    headers: {
        "Content-Type": "application/json",
    },
})

export default instance
