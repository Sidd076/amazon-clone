import axios from 'axios'

const instance = axios.create({
    baseURL: "https://amazon-clone-backend-api.vercel.app/"
})

export default instance
