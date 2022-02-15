import { AdventureResult } from './AdventureResult';
import { Business } from '../models/YelpModel';
import { useState } from 'react';

export interface MainProp {
    businesses: Business[];
    onAdd: (business: Business) => void;
    onDelete: (business: Business) => void;
}

function AdventureResultsList({businesses, onAdd, onDelete}:MainProp) {
    const [hidden, setHidden] = useState(true)

    function toggleDisplay() {
        if (hidden) {
        setHidden(false);
    }   else {
        setHidden(true)
    }};

    return (

        <div className='Component-List' id="Food-List">
            <h1 onClick={toggleDisplay}> Adventure <i className="material-icons" id="Dropdown-Arrow" onClick={toggleDisplay}  title="Show results" >expand_more</i></h1>

        {hidden ? 
        <div className="Component-Map-Div">
        {businesses.map( (business, i) => 
        <AdventureResult key={i} business={business} onAdd={()=>onAdd(business)} onDelete={()=>onDelete(business)}  />)}
        </div>
        : null
        }
        </div>
    )
}

export default AdventureResultsList;