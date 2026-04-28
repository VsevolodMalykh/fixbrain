import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { AppContext } from "../../../app/context/app-context"
import { userStorage } from "../../../features/auth/model/userStorage"
import { ProfileApi } from "../api/profile-api"
import type { RegType } from "../../../features/auth/types/user-type"
import { registerSchema } from "../../../features/auth/model/schema"

function ProfileForm() {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    resolver: zodResolver(registerSchema)
  })

  const { setUser } = useContext(AppContext)
  const onSubmitHandler = async (data: RegType) => {
    try {
      const response = await ProfileApi.updateMe(data)
      userStorage.setUser(response)
      setUser(response)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <label>Имя
          <input className={errors.name ? 'error-input' : ''} type="text" {...register('name')} placeholder="Имя" />
          {errors.name && <span className="error-text">{errors.name.message}</span>}
        </label>
        <label>Почта
          <input className={errors.email ? 'error-input' : ''} type="email" {...register('email')} placeholder="Почта" />
          {errors.email && <span className="error-text">{errors.email.message}</span>}
        </label>
        <label>Пароль
          <input className={errors.password ? 'error-input' : ''} type="password" {...register('password')} placeholder="Пароль" />
          {errors.password && <span className="error-text">{errors.password.message}</span>}
        </label>

        <button type="submit">Отправить</button>
      </form>
    </div>
  )
}

export default ProfileForm