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
