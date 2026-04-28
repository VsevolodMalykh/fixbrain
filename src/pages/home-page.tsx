import { useContext } from "react"
import { AppContext } from "../app/context/app-context"


function HomePage() {
  const { user } = useContext(AppContext)

  return (
    <div>
      <h1>Привет, {user ? user.name : 'Гость'}!</h1>

      <h3>Популярные зоны:</h3>
      <ol>
        <li>Остров Эпштейна</li>
        <li>улица Мусы Джалилия</li>
        <li>Хостел 3</li>
      </ol>

      <h3>Преимущества:</h3>
      <ol>
        <li>Безопасность</li>
        <li>Доступность</li>
        <li>Тишина</li>
      </ol>
    </div>
  )
}

export default HomePage