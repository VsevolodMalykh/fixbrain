import { useContext, useEffect } from "react"
import { AppContext } from "../../../../app/context/app-context"
import { SpacesAPI } from "../../api/spaces-api"
import { useNavigate } from "react-router"
import styles from './style.module.css'

function SpacesList() {
    const navigate = useNavigate()
    const { spaces, setSpaces } = useContext(AppContext)
    useEffect(() => {
        SpacesAPI.getAll().then(data => setSpaces(data))
    }, [setSpaces])
    return (
        <div className={styles.spaces}>
            {spaces.map(space => (
                <div key={space.id} onClick={() => navigate(`/spaces/${space.id}`)} className={styles.spaces__card}>
                    <h2>{space.title}</h2>
                    <p>{space.description}</p>
                    <p>{space.capacity}</p>
                    <p>{space.pricePerHour}</p>
                    <p>{space.rating}</p>
                    <p>{space.zoneType}</p>
                    {space.images.map(image => (
                        <img src={image} alt={space.title} key={image} />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default SpacesList