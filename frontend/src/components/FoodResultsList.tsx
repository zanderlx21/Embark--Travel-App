import { FoodResult } from './FoodResult';
import { Business } from '../models/YelpModel';
import { useState } from 'react';


export interface MainProp {
    businesses: Business[];
    onAdd: (business: Business) => void;
    onDelete: (business: Business) => void;
}

function FoodResultsList({businesses, onAdd, onDelete}:MainProp) {
    const [hidden, setHidden] = useState(true)

    function toggleDisplay() {
        if (hidden) {
        setHidden(false);
    }   else {
        setHidden(true)
    }};

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
             <h1 onClick={toggleDisplay}> Restaurants <i className="material-icons" id="Dropdown-Arrow" onClick={toggleDisplay}  title="Show results" >expand_more</i></h1>

        {hidden ?
        <div className="Component-Map-Div">
        {businesses.map( (business, i) => 
        <FoodResult key={i} business={business} onAdd={()=>onAdd(business)} onDelete={()=>onDelete(business)}  />)} 
        </div>
        : null
        }
        </div>
    )
}

export default FoodResultsList;