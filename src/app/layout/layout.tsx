import { useContext } from "react"
import { Link, Outlet } from "react-router"
import { AppContext } from "../context/app-context"

function Layout() {
  const { user } = useContext(AppContext)

  return (
    <div>
      <header>
        <Link to={'/'}>Home</Link>
        <Link to={'/spaces'}>Spaces</Link>

        {!user && <>
          <Link to={'/register'}>Register</Link>
          <Link to={'/login'}>Login</Link>        
        </>}

        {user && <>       
          <Link to={'/my-bookings'}>My Bookings</Link>
          <Link to={'/profile'}>Profile</Link>
        </>}

        {user?.role === 'manager' && <>       
          <Link to={'/manage-bookings'}>Manage Bookings</Link>
        </>}

      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout