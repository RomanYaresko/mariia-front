import api from '@/config/api'
import {
  LoginResponseSchema,
  type LoginPayload,
  type LoginResponse
} from '@/validations/auth.validation'

export const loginRequest = async (payload: LoginPayload): Promise<LoginResponse> => {
  const response = await api.post('/auth/login', payload)
  return LoginResponseSchema.parse(response.data)
}
