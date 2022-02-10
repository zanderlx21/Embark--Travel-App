import { Business } from "../models/YelpModel"

interface Prop {
    business: Business,
    onAdd: ()=> void
}

function OutdoorResult({business, onAdd}:Prop) {
    return (

        <div className="Component-Result" id="Outdoor-Result">
            <img src={business.image_url} alt="image of Outdoor Activity" />
            <p className="Business-Name-on-Card">{business.name}</p>
            <p className="Rating">{business.rating}</p>
            <p className="Price">{business.price}</p>

            <button id="Add-to-List-Button" onClick={onAdd} >Add to Itinerary</button>

        </div>
    )
}
 
export default OutdoorResult;