import z from 'zod'
import {
  ErrorResponseSchema,
  SuccessResponseSchema,
  type ErrorResponse
} from '@/validations/general.validation'

export const UserSchema = z.object({
  id: z.number(),
  username: z.string(),
  createdAt: z.coerce.date()
})
export type User = z.infer<typeof UserSchema>

export const CurrentUserSuccessResponseSchema = SuccessResponseSchema(UserSchema)
export type CurrentUserSuccessResponse = z.infer<typeof CurrentUserSuccessResponseSchema>

export const CurrentUserResponseSchema = z.union([
  CurrentUserSuccessResponseSchema,
  ErrorResponseSchema
])
export type LoginResponse = CurrentUserSuccessResponse | ErrorResponse
