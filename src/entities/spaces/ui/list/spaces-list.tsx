import { useContext, useEffect } from "react"
import { AppContext } from "../../../../app/context/app-context"
import { SpacesAPI } from "../../api/spaces-api"

function SpacesList() {
    const {spaces, setSpaces} = useContext(AppContext)
    useEffect(() => {
        SpacesAPI.getAll().then(data => setSpaces(data))
    }, [setSpaces])
  return (
    <div>
        {spaces.map(space => (
            <div>
                <h2>{space.title}</h2>
                <p>{space.description}</p>
                <p>{space.capacity}</p>
                <p>{space.pricePerHour}</p>
                <p>{space.rating}</p>
                <p>{space.zoneType}</p>
                {space.images.map(image => (
                    <img src={image} alt={space.title} />
                ))}
            </div>
        ))}
    </div>
  )
}

export default SpacesList