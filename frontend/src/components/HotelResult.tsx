import { Business, YelpModel } from "../models/YelpModel"

interface Prop {
    business: Business,
}

export function HotelResult({business}:Prop) {
  
    return (

        <div className="Hotel-Result">
            <img src="https://cdn.vox-cdn.com/thumbor/730qb_rXs4ngJ9PMfBpMo2uisHQ=/0x158:3000x1846/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/56295273/20150609-oleanders_restaurant_-5.0.0.jpg" alt="image of Restaurant Lobby" />
            <p>{business.name}</p>
            {/* <div className="image"><img src={business.url} alt="" /></div> */}
            <p className="rating">{business.rating}</p>

        </div>
    )
}