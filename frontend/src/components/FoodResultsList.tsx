import { FoodResult } from './FoodResult';
import { Business } from '../models/YelpModel';
import { useState } from 'react';


export interface MainProp {
    businesses: Business[];
    onAdd: (business: Business) => void;
    onDelete: (business: Business) => void;
}

function FoodResultsList({businesses, onAdd, onDelete}:MainProp) {


//////////////testing removing from sidebar
// const [ itineraryItems, setItineraryItems ] = useState<Business[]>([]);

//     function deleteFromItinerary(business:Business) {
//         onDelete(business);

//         let index = itineraryItems.findIndex(b => b._id === business._id);
//             setItineraryItems(prev => [...prev.slice(0, index), ...prev.slice(index+1)])
//     }
//////////////

    return (

        <div className='Component-List' id="Food-List">
            <h1>Restaurants</h1>

        <div className="Component-Map-Div">
            
        {businesses.map( (business, i) => 
        <FoodResult key={i} business={business} onAdd={()=>onAdd(business)} onDelete={()=>onDelete(business)}  />)} 

        </div>
        </div>
    )
}

export default FoodResultsList;