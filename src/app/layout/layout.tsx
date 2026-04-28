import { useContext } from "react"
import { Link, Outlet } from "react-router"
import { AppContext } from "../context/app-context"
import styles from './style.module.css'

function Layout() {
  const { user } = useContext(AppContext)

  return (
    <div>
      <header className={styles.header}>
        <Link to={'/'} className={styles.header_link}>Home</Link>
        <Link to={'/spaces'} className={styles.header_link}>Spaces</Link>

        {!user && <>
          <Link to={'/register'} className={styles.header_link}>Register</Link>
          <Link to={'/login'} className={styles.header_link}>Login</Link>
        </>}

        {user && <>
          <Link to={'/my-bookings'} className={styles.header_link}>My Bookings</Link>
          <Link to={'/profile'} className={styles.header_link}>Profile</Link>
        </>}

        {user?.role === 'manager' && <>
          <Link to={'/manage-bookings'} className={styles.header_link}>Manage Bookings</Link>
        </>}

      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout