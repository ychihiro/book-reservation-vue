import Axios from 'axios'

const API_URL = 'http://localhost'

export const axios = Axios.create({
  baseURL: API_URL,
  withCredentials: true,
  withXSRFToken: true,
})

axios.interceptors.request.use((request) => {
  console.log(request.url)
  return request
})

export default axios
