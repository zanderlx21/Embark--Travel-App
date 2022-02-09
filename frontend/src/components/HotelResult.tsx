import { Business } from "../models/YelpModel"
import { useState } from 'react';

interface Prop {
    business: Business,
    onFavorite: (business:Business)=>void
}

export function HotelResult({business, onFavorite}:Prop) {

    const [ liked, setLiked ] = useState(false);

    let likeButton = () => {
        onFavorite(business);
        // setLiked(true)
    }

    return (

        <div className="Hotel-Result">
            <img src={business.url} alt="image of Restaurant Lobby" />
            <p>{business.name}</p>
            {/* <div className="image"><img src={business.url} alt="" /></div> */}
            <p className="rating">{business.rating}</p>

            <button id="Add-to-List" onClick={likeButton} >Add to Itinerary</button>

        </div>
    )
}