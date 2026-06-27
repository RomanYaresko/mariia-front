import { AUTH_MESSAGES } from '@/constants/messages/auth.messages'
import z from 'zod'
import {
  ErrorResponseSchema,
  SuccessResponseSchema,
  type ErrorResponse
} from '@/validations/general.validation'

export const LoginPayloadSchema = z.object({
  username: z.string().min(1, AUTH_MESSAGES.USERNAME_VALIDATION),
  password: z.string().min(1, AUTH_MESSAGES.PASSWORD_VALIDATION)
})
export type LoginPayload = z.infer<typeof LoginPayloadSchema>

export const LoginSuccessResponseSchema = SuccessResponseSchema(
  z.object({
    token: z.string()
  })
)
export type LoginSuccessResponse = z.infer<typeof LoginSuccessResponseSchema>

export const LoginResponseSchema = z.union([LoginSuccessResponseSchema, ErrorResponseSchema])
export type LoginResponse = LoginSuccessResponse | ErrorResponse
