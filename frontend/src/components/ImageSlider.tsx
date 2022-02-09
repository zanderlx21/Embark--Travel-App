import { HotelResult } from './HotelResult';
import { Business } from '../models/YelpModel';
import { addFavorite } from '../models/ItineraryPost';
import { useState } from 'react';

export interface MainProp {
    businesses: Business[];
}

function HotelResultsList ({businesses}:MainProp) {
    const [current, setCurrent] = useState(0)
    

    function addToFavorites(business: Business){
        addFavorite(business);
    }

    return (

        <div className="Hotel-List">
            <h1>Hotels</h1>
            
            
        <div className="Hotel-Map-Div">
        {businesses.map((business, i) => <HotelResult key={i} business={business} onFavorite={addToFavorites} />)}
        </div>


        </div>
    )
}

export default HotelResultsList;
