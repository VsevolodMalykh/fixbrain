import { useContext } from "react"
import { AppContext } from "../../app/context/app-context"
import styles from './style.module.css'

function HomePage() {
  const { user } = useContext(AppContext)

  return (
    <div className={styles.container}>
      <h1>Привет, {user ? user.name : 'Гость'}!</h1>

      <div className={styles.container__blocks}>
        <div className={styles.container__block}>
          <h3>Популярные зоны:</h3>
          <ol >
            <li>Остров Эпштейна</li>
            <li>улица Мусы Джалилия</li>
            <li>Хостел 3</li>
          </ol>
        </div>

        <div className={styles.container__block}>
          <h3>Преимущества:</h3>
          <ol>
            <li>Безопасность</li>
            <li>Доступность</li>
            <li>Тишина</li>
          </ol>
        </div>
      </div>

    </div>
  )
}

export default HomePage