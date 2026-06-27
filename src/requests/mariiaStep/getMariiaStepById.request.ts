import api from '@/config/api'
import {
  MariiaStepResponseSchema,
  type MariiaStepResponse
} from '@/validations/mariiaStep.validation'

export const getMariiaStepById = async (id: number): Promise<MariiaStepResponse> => {
  const response = await api.get(`/mariia-steps/${id}`)
  return MariiaStepResponseSchema.parse(response.data)
}
