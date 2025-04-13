import axios from '@/plugins/axios'

export interface RegisterRequest {
  body: {
    name: string
    email: string
    password: string
  }
}

export async function register(request: RegisterRequest) {
  return await axios.post('/api/register', request.body)
}
