import { Business, YelpModel } from "../models/YelpModel"

interface Prop {
    business: Business,
}

export function HotelResult({business}:Prop) {
  
    return (

        <div className="Hotel-Result">
            <p>{business.name}</p>
            <div className="image"><img src={business.url} alt="" /></div>
            <p className="rating">{business.rating}</p>

        </div>
    )
}