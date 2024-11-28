import axios, { AxiosInstance } from "axios"

const BaseUrl ="https://emkc.org/api/v2/piston"
// GET  https://emkc.org/api/v2/piston/runtimes
// POST https://emkc.org/api/v2/piston/execute


const instance: AxiosInstance = axios.create({
    baseURL: BaseUrl,
    headers: {
        "Content-Type": "application/json",
    },
})

export default instance