import z from "zod";


export const registerSchema = z.object({
    username: z.string().min(6, 'Минимальная длина 6 символов').max(30, 'Максимальная длина 30 символов'),
    email: z.email().min(6, 'Минимальная длина 6 символов').max(30, 'Максимальная длина 30 символов'),
    password: z.string().min(6, 'Минимальная длина 6 символов').max(30, 'Максимальная длина 30 символов'),
})