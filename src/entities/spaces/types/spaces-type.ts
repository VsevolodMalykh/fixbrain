export type SpaceType =  {
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