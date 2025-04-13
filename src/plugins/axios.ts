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

axios.interceptors.response.use((request) => {
  // エラーだった場合
  if (request.status === 500) {
    console.log('Server Error')
  } else if (request.status === 401) {
    console.log('Unauthorized')
  }

  return request
})

export default axios
