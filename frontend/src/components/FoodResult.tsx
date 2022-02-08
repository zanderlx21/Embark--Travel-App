import { Business } from "../models/YelpModel"

interface Prop {
    business: Business,
}

export function FoodResult({business}:Prop) {

    return (
        <div className="Food-Result">
            <h1>Hello</h1>
            <p>{business.name}</p>
            <div className="image"><img src={business.url} alt="" /></div>
            <p className="rating">{business.rating}</p>
        </div>
    )
}
