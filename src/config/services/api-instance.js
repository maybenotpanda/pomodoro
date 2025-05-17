import axios from 'axios'

const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER_URL,
  timeout: 12000
})

export default apiInstance
