import { useEffect, useState } from "react"
import {type BookingType } from "../../entities/spaces/types/spaces-type"
import { SpacesAPI } from "../../entities/spaces/api/spaces-api"
import styles from './styles.module.css'

function MyBookingPage() {
  const [bookings, setBooking] = useState<BookingType[]>([])

  useEffect(() => {
    SpacesAPI.getAllBookings().then(datsa => setBooking(datsa))
  }, [])
  return (
    <div>
      <h1>My Booking</h1>
      <div className={styles.bookings}></div>
      {
        bookings.map(booking => (<div className={styles.bookings__card}>
          <h2>{booking.date}</h2>
          <p>{booking.comment}</p>
        </div>))
      }
    </div>
  )
}

export default MyBookingPage