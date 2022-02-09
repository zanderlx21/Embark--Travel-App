import { Business } from "../models/YelpModel"

interface Prop {
    business: Business,
}

function IndoorResult({business}:Prop) {
    return (

        <div className="Indoor-Result">
            <h1>Indoor</h1>
            <p>{business.name}</p>
            <div className="image"><img src={business.image_url} alt="" /></div>
            <p className="rating">{business.rating}</p>
        </div>
    )
}
export default IndoorResult;