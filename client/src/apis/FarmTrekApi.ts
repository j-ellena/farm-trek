import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const config: AxiosRequestConfig = {
    baseURL: 'http://localhost:8000'
}
const HTTPclient: AxiosInstance = axios.create(config)

export default HTTPclient
