import z from "zod";


export const registerSchema = z.object({
    name: z.string().min(6, 'Минимальная длина 6 символов').max(30, 'Максимальная длина 30 символов'),
    email: z.email().min(6, 'Минимальная длина 6 символов').max(30, 'Максимальная длина 30 символов'),
    password: z.string().min(6, 'Минимальная длина 6 символов').max(30, 'Максимальная длина 30 символов'),
})
export const AuthSchema = z.object({
    email: z.email().min(6, 'Минимальная длина 6 символов').max(30, 'Максимальная длина 30 символов'),
    password: z.string().min(6, 'Минимальная длина 6 символов').max(30, 'Максимальная длина 30 символов'),
})