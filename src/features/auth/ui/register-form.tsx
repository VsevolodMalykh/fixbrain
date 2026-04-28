import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { registerSchema } from "../model/schema"
import type { TUser } from "../model/types"
import { RegisterApi } from "../api/register-api"
import { useNavigate } from "react-router"

function RegisterForm({ isRegister }: { isRegister?: boolean }) {
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm({
        resolver: zodResolver(registerSchema) 
    })

    const navigate = useNavigate()

    const onSubmitHandler = async (data: TUser) => {
        try {
            if (isRegister) {
                await RegisterApi.register(data)
            } else {
                await RegisterApi.login(data)
            }
            
            navigate('/')
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
            
            <label>
                <input type="text" {...register('username')} />
                {errors.username && <span className="error-text">{errors.username.message}</span>}
            </label>
            <label>
                <input type="email" {...register('email')} />
                {errors.email && <span className="error-text">{errors.email.message}</span>}
            </label>
            <label>
                <input type="password" {...register('password')} />
                {errors.password && <span className="error-text">{errors.password.message}</span>}
            </label>

            <button type="submit">Отправить</button>
        </form>
    </div>
  )
}

export default RegisterForm