import { Business } from "../models/YelpModel";

interface Props {
    business: Business
    onDelete: () => void;
}

export function ItineraryItem({business, onDelete}:Props) {

    return (
        <div className="Itinerary-Item">
            <h1>Hooray!</h1>
            <p>{business.name}</p>
            <p>{business.rating} <i className="material-icons" id="Trash-Can" onClick={onDelete}>delete</i></p>
        </div>
    )
}


