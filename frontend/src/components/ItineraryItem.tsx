import { Business } from "../models/YelpModel";


interface Props {
    business: Business
    onDelete: () => void;
}

export function ItineraryItem({business, onDelete}:Props) {

    return (
        <div className="ItineraryItem">
            <h1>ITINERARY LIST</h1>

            <p>{business.name}</p>
            <p>{business.rating} <i className="material-icons" onClick={onDelete}>delete</i></p>
            
        </div>
    )
}


