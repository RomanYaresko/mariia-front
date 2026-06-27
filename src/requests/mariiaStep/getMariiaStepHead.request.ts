import api from '@/config/api'
import {
  MariiaStepResponseSchema,
  type MariiaStepResponse
} from '@/validations/mariiaStep.validation'

export const getMariiaStepHead = async (): Promise<MariiaStepResponse> => {
  const response = await api.get('/mariia-steps/head')
  return MariiaStepResponseSchema.parse(response.data)
}
