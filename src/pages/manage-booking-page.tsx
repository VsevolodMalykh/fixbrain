import { useEffect, useState } from "react"
import { type BookingType } from "../entities/spaces/types/spaces-type"
import { SpacesAPI } from "../entities/spaces/api/spaces-api"


function ManageBookingPage() {
  const [bookings, setBooking] = useState<BookingType[]>([])

  useEffect(() => {
    SpacesAPI.getAllBookings().then(datsa => setBooking(datsa))
  }, [])
  const changeStatus = async (id: number, status: 'approved' | 'rejected') => {
    SpacesAPI.changeStatus(id, status).then(data => setBooking(prev => prev.map(el => el.id === id ? { ...el, status: data.status } : el)))
  }
  return (
    <div>
      <h1>Manage Booking</h1>
      {
        bookings.map(booking => (<div key={booking.id}>
          <h2>{booking.date}</h2>
          <p>{booking.comment}</p>
          {
            booking && booking.status === "pending" && <button type="button" onClick={() => changeStatus(booking.id, 'approved')}>aprove</button>
          }
          {
            booking && booking.status === "pending" && <button type="button" onClick={() => changeStatus(booking.id, 'rejected')}>rejected</button>
          }
        </div>))
      }
    </div>
  )
}

export default ManageBookingPage