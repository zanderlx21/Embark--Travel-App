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
            <p>Number of Reviews: {business.review_count}</p>
            <p>Price: {business.price}</p>
            </div>
            </div>

        </div>
    )
}


