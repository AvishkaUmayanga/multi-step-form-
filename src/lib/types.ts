import { z } from "zod"

export const personalSchema = z.object({
  firstName: z.coerce.string().min(2, "First name must be at least 2 characters"),
  lastName: z.coerce.string().min(2, "Last name must be at least 2 characters"),
})
  
export type TPersonalSchema = z.infer<typeof personalSchema>;


export const educationSchema = z.object({
  schoolName: z.coerce.string().min(3, "School name must be at least 3 characters"),
  grade: z.coerce.number().min(1, "Grade is required")
})

export type TEducationSchema = z.infer<typeof educationSchema>

export const createAccountSchema = z.object({
  userEmail: z.coerce.string().email(),
  userPassword: z.coerce.string().min(8, "Password must be at least 8 characters"),
  comfirmPassword: z.coerce.string(),
}).refine(data => data.userPassword === data.comfirmPassword, {
  message: "Passwords must match",
  path: ["comfirmPassword"]
})

export type TCreateAccountSchema = z.infer<typeof createAccountSchema>