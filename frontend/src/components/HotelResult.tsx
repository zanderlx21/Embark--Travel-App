import { Business } from "../models/YelpModel"

interface MainProp {
    business: Business;
    onAdd: ()=>void
    // onDelete: (business:Business)
}

export function HotelResult({business, onAdd}:MainProp) {

    return (

        <div className="Component-Result">
            <img src={business.image_url} alt="image of Restaurant Lobby" />
            <p className="Business-Name-on-Card">{business.name}</p>
            <p className="Rating">{business.rating}</p>
            <p className="Price">{business.price}</p>

            <button id="Add-to-List-Button" onClick={onAdd} >Add to Itinerary</button>

        </div>
    )
}