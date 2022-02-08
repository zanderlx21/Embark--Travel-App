import { Business } from "../models/YelpModel"

interface Prop {
    business: Business,
}

export function HotelResult({business}:Prop) {
  
    return (

        <div className="Hotel-Result">
            <img src={business.url} alt="image of Restaurant Lobby" />
            <p>{business.name}</p>
            {/* <div className="image"><img src={business.url} alt="" /></div> */}
            <p className="rating">{business.rating}</p>
        </div>
    )
}