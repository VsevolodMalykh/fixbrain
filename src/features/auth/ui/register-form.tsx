import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { registerSchema } from "../model/schema"
import { RegisterApi } from "../api/register-api"
import { useNavigate } from "react-router"
import type { RegType } from "../types/user-type"
import { userStorage } from "../model/userStorage"
import { useContext } from "react"
import { AppContext } from "../../../app/context/app-context"

function RegisterForm() {
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm({
        resolver: zodResolver(registerSchema)
    })

    const navigate = useNavigate()
        const {setUser} = useContext(AppContext)

    const onSubmitHandler = async (data: RegType) => {
        try {
            const response = await RegisterApi.register(data)

            userStorage.setAccessToken(response.accessToken)
            userStorage.setUser(response.user)
            setUser(response.user)
            navigate('/')
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <label>
                    <input type="text" placeholder="name" {...register('name')} />
                    {errors.name && <span className="error-text">{errors.name.message}</span>}
                </label>
                <label>
                    <input type="email" placeholder="email" {...register('email')} />
                    {errors.email && <span className="error-text">{errors.email.message}</span>}
                </label>
                <label>
                    <input type="password" placeholder="password" {...register('password')} />
                    {errors.password && <span className="error-text">{errors.password.message}</span>}
                </label>

                <button type="submit">Отправить</button>
            </form>
        </div>
    )
}

export default RegisterForm