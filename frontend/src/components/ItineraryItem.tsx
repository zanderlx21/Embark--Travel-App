import { Business } from "../models/YelpModel";
import "./ItineraryItem.css";

interface Props {
    business: Business
    onDelete: () => void;
}

export function ItineraryItem({business, onDelete}:Props) {

    return (
        <div className="Itinerary-Item">
            <h3>{business.name} | {business.location.city}</h3>

            <div className="Outer-Item-Div">

            <div className="Inner-Div1">
            <img src={business.image_url} height={100} width={100} />
            </div>
    
            <div className="Inner-Div2">
            <p>Rating: {business.rating} <i className="material-icons" id="Trash-Can" onClick={onDelete}>delete</i></p>
            <p>Reviews: {business.review_count}</p>
            <p>Price: {business.price}</p>
            <p>Open Now: {business.is_closed}</p> 
            <p>Phone: {business.display_phone}</p>
            <p>Address: {business.location.display_address}</p>
            <p><a href={business.url} target="_blank">Link to Yelp</a></p>

            </div>
            </div>

        </div>
    )
}


