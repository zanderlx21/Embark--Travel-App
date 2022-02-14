import { FamilyResult } from './FamilyResult';
import { Business } from '../models/YelpModel';
import { useState } from 'react';

export interface MainProp {
    businesses: Business[];
    onAdd: (business: Business) => void;
    onDelete: (business: Business) => void;
}

function FamilyResultsList({businesses, onAdd, onDelete}:MainProp) {
    const [hidden, setHidden] = useState(true)

    function toggleDisplay() {
        if (hidden) {
        setHidden(false);
    }   else {
        setHidden(true)
    }};


    return (

        <div className='Component-List' id="Food-List">
            <h1 onClick={toggleDisplay}>Family Activites</h1>

        {hidden ? 
        <div className="Component-Map-Div">  
        {businesses.map( (business, i) => 
        <FamilyResult key={i} business={business} onAdd={()=>onAdd(business)} onDelete={()=>onDelete(business)}  />)}
        </div>
        : null
    }
        
        </div>
    )
}

export default FamilyResultsList;