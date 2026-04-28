import { useEffect, useState } from "react"
import { ProfileApi } from "../api/profile-api"
import type { UserType } from "../../../features/auth/types/user-type"
import { userStorage } from "../../../features/auth/model/userStorage"
import ProfileForm from "./profile-form"
import styles from './style.module.css'

function ProfileCard() {
  const [user, setUser] = useState<UserType | null>(userStorage.getUser())
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    ProfileApi.getMe().then(data => setUser(data)).catch(error => console.error(error))
  }, [])

  if (!user) {
    return (
      <>
        <h3>Пользователь не найден</h3>
      </>
    )
  }

  return (
    <div className={styles.card}>
      <h3>{user.name}</h3>
      <p>{user.role}</p>
      <p>{user.email}</p>
      <p>{user.password}</p>

      <button onClick={() => setIsShow(prev => !prev)}>Изменить данные</button>
      {isShow && (
        <ProfileForm />
      )}
    </div>
  )
}

export default ProfileCard