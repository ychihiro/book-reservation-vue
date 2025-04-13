import Axios from 'axios'

const API_URL = 'http://localhost/api'

export const axios = Axios.create({
  baseURL: API_URL,
  withCredentials: true,
  withXSRFToken: true,
})

export default axios
