import { useEffect, useState } from "react"
import {type BookingType } from "../entities/spaces/types/spaces-type"
import { SpacesAPI } from "../entities/spaces/api/spaces-api"

function MyBookingPage() {
  const [bookings, setBooking] = useState<BookingType[]>([])

  useEffect(() => {
    SpacesAPI.getAllBookings().then(datsa => setBooking(datsa))
  }, [])
  return (
    <div>
      <h1>Me Booking</h1>
      {
        bookings.map(booking => (<div>
          <h2>{booking.date}</h2>
          <p>{booking.comment}</p>
        </div>))
      }
    </div>
  )
}

export default MyBookingPage