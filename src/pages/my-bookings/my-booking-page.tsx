import { useEffect, useState } from "react"
import { type BookingType } from "../../entities/spaces/types/spaces-type"
import { SpacesAPI } from "../../entities/spaces/api/spaces-api"
import styles from './styles.module.css'
import { userStorage } from "../../features/auth/model/userStorage"

function MyBookingPage() {
  const [bookings, setBooking] = useState<BookingType[]>([])
  const user = userStorage.getUser()
  useEffect(() => {
    SpacesAPI.getAllBookings().then(datsa => setBooking(datsa))
  }, [])
  return (
    <div>
      <h1>My Booking</h1>
      <div className={styles.bookings}></div>
      {
        bookings.filter(el => el.User.id === user.id).map(booking => (<div>
          <h2>{booking.date}</h2>
          <p>{booking.comment}</p>
        </div>))
      }
    </div>
  )
}

export default MyBookingPage