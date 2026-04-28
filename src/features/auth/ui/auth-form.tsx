import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { AuthSchema } from "../model/schema"
import { RegisterApi } from "../api/register-api"
import { useNavigate } from "react-router"
import type { AuthType } from "../types/user-type"
import { userStorage } from "../model/userStorage"
import { useContext } from "react"
import { AppContext } from "../../../app/context/app-context"

function AuthForm() {
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm({
        resolver: zodResolver(AuthSchema)
    })

    const navigate = useNavigate()
    const {setUser} = useContext(AppContext)
    const onSubmitHandler = async (data: AuthType) => {
        try {
            const response = await RegisterApi.login(data)
            navigate('/')
            
            userStorage.setAccessToken(response.accessToken)
            userStorage.setUser(response.user)
            setUser(response.user)
        } catch (error) {
        console.error(error);
    }
}

return (
    <div>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
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

export default AuthForm