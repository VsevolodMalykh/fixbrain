import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { SpacesAPI } from "../../entities/spaces/api/spaces-api"
import type { SpaceType } from "../../entities/spaces/types/spaces-type"
import BookingForm from "../../entities/spaces/ui/booking-form/booking-form"
import { userStorage } from "../../features/auth/model/userStorage"
import styles from './style.module.css'


function SpacePage() {
  const { id } = useParams()
  const [currentSpace, setCurrentSpace] = useState<SpaceType | null>(null)
  const [isSeeBroneForm, setIsSeeBroneForm] = useState<boolean>(false)
  const user = userStorage.getUser()
  useEffect(() => {
    SpacesAPI.getById(+id).then(data => setCurrentSpace(data))
  }, [id])
  return (
    <div>
      <h1>Space</h1>
      {currentSpace && (<div className={styles.card}>
        <h2>{currentSpace.title}</h2>
        <p>{currentSpace.description}</p>
        <p>{currentSpace.capacity}</p>
        <p>{currentSpace.pricePerHour}</p>
        <p>{currentSpace.rating}</p>
        <p>{currentSpace.zoneType}</p>
        {currentSpace.images.map(image => (
          <img src={image} alt={currentSpace.title} key={image} />
        ))}
        {user &&
          <>
            <button type="submit" onClick={() => setIsSeeBroneForm(prev => !prev)}>
              Забронировать
            </button>

            {isSeeBroneForm && <BookingForm id={+id} />}
          </>
        }


      </div>)}
    </div>
  )
}

export default SpacePage