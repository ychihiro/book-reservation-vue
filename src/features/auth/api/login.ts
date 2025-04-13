import axios from '@/plugins/axios'

export interface LoginRequest {
  body: {
    email: string
    password: string
  }
}

export async function login(request: LoginRequest) {
  return await axios.post('/api/login', request.body)
}
