import axios from "axios"
const API = axios.create({
    baseURL: "https://todoapp-backends-u6pf83ts2-coding23.vercel.app/"
})

API.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    if (token) {
        config.headers.Authorization = token
    }
    return config
})

export default API
 