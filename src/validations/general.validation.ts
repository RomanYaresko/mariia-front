import { z } from 'zod'
import { object } from 'zod/v4'

export const SuccessResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    success: z.literal(true),
    message: z.string(),
    data: dataSchema
  })
export const EmptySuccessResponseSchema = SuccessResponseSchema(z.object({}))
export type EmptySuccessResponse = z.infer<typeof EmptySuccessResponseSchema>

export const ErrorResponseSchema = z.object({
  success: z.literal(false),
  message: z.string(),
  errors: z.array(z.object({ message: z.string() })).optional()
})
export type ErrorResponse = z.infer<typeof ErrorResponseSchema>

export const EmptyResponseSchema = z.union([EmptySuccessResponseSchema, ErrorResponseSchema])
export type EmptyResponse = EmptySuccessResponse | ErrorResponse
