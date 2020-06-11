import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.lyrics.ovh/'
})

export default api