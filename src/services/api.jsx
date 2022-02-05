import axios from "axios"
import 'dotenv/config'

console.log(process.env)

const key = '5aa71fc224c6c6ef19fe6d4f43acae293a1cfd32'

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api;