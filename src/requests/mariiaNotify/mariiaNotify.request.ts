import api from '@/config/api'
import { EmptyResponseSchema, type EmptyResponse } from '@/validations/general.validation'

export const mariiaNotify = async (): Promise<EmptyResponse> => {
  const response = await api.post(`/mariia-notify`)
  return EmptyResponseSchema.parse(response.data)
}
