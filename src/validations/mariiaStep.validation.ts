import z from 'zod'
import {
  ErrorResponseSchema,
  SuccessResponseSchema,
  type ErrorResponse
} from '@/validations/general.validation'

export const MariiaStepSchema = z.object({
  id: z.number(),
  isHead: z.boolean(),
  title: z.string().nullable(),
  description: z.string().nullable(),
  isGift: z.boolean(),
  foundGiftButtonText: z.string().nullable(),
  giftName: z.string().nullable(),
  buttonText: z.string(),
  nextId: z.number().nullable(),
  prevId: z.number().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date()
})
export type MariiaStep = z.infer<typeof MariiaStepSchema>

export const MariiaStepSuccessResponseSchema = SuccessResponseSchema(MariiaStepSchema)
export type MariiaStepSuccessResponse = z.infer<typeof MariiaStepSuccessResponseSchema>

export const MariiaStepResponseSchema = z.union([
  MariiaStepSuccessResponseSchema,
  ErrorResponseSchema
])
export type MariiaStepResponse = MariiaStepSuccessResponse | ErrorResponse
