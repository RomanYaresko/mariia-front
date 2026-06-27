import api from '@/config/api'
import {
  CurrentUserResponseSchema,
  type LoginResponse as CurrentUserResponse
} from '@/validations/user.validation'

export const getCurrentUserRequest = async (): Promise<CurrentUserResponse> => {
  const response = await api.get('/users/current')
  return CurrentUserResponseSchema.parse(response.data)
}
