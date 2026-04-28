export type SpaceType = {
  id: number
  title: string
  zoneType: 'open-space' | 'meeting-room' | 'private-office'
  pricePerHour: number
  capacity: number
  rating: number
  description: string
  images: string[]
}

export type BookingPostType = {
  spaceId: number,
  date: string,
  timeFrom: string,
  timeTo: string,
  comment: string
}

export type BookingType = {
  id: number
  userId: number
  spaceId: number
  date: string
  timeFrom: string
  timeTo: string
  comment: string
  status: 'pending' | 'approved' | 'rejected' | 'cancelled'
  createdAt: string
  updatedAt: string
  Space: {
    id: 1,
    title: string,
    zoneType: string,
    pricePerHour: number
  }
  User: {
    id: number,
    email: string,
    name: string
  }
}
