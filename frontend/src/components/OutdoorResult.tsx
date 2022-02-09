import { Business } from "../models/YelpModel"

interface Prop {
    business: Business,
}

function OutdoorResult({business}:Prop) {
    return (

        <div className="Outdoor-Result">
            <h1>Outdoor</h1>
            <p>{business.name}</p>
            <div className="image"><img src={business.image_url} alt="" /></div>
            <p className="rating">{business.rating}</p>
        </div>
    )
}

export default OutdoorResult;