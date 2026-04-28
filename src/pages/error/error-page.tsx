import { useNavigate } from "react-router"

function ErrorPage() {
  const navigate = useNavigate()
  return (
    <div>
        <h1>Похоже страница не найдена...</h1>
        <button onClick={() => navigate('/')}>Вернуться?</button>
    </div>
  )
}

export default ErrorPage