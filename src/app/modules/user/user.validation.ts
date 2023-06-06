import { z } from 'zod'

// await createUserZodScheme.parseAsync(req)

const createUserZodScheme = z.object({
  body: z.object({
    role: z.string({
      required_error: 'role is required',
    }),
    password: z.string().optional(),
  }),
})

export const UserValidation = {
  createUserZodScheme,
}
