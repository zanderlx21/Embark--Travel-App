import { FitnessResult } from './FitnessResult';
import { Business } from '../models/YelpModel';
import { useState } from 'react';
// import { ItineraryPost } from '../models/ItineraryPost';

export interface MainProp {
    businesses: Business[];
    onAdd: (business: Business) => void;
    onDelete: (business: Business) => void;
}

function FitnessResultsList({businesses, onAdd, onDelete}:MainProp) {
    const [hidden, setHidden] = useState(true)

    function toggleDisplay() {
        if (hidden) {
        setHidden(false);
    }   else {
        setHidden(true)
    }};


    return (

        <div className='Component-List' id="Food-List">
            <h1 onClick={toggleDisplay}>Fitness / Active</h1>
        
        {hidden ? 
        <div className="Component-Map-Div">
        {businesses.map( (business, i) => 
        <FitnessResult key={i} business={business} onAdd={()=>onAdd(business)} onDelete={()=>onDelete(business)}  />)}
        </div>
        : null
        }
        </div>
    )
}

export default FitnessResultsList;