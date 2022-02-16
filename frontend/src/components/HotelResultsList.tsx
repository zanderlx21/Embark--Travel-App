import { HotelResult } from './HotelResult';
import { Business } from '../models/YelpModel';
import { useState } from 'react';

export interface MainProp {
    businesses: Business[];
    onAdd: (business:Business)=>void;
    onDelete: (business:Business)=>void;
}

function HotelResultsList ({businesses, onAdd, onDelete}:MainProp) {
    const [hidden, setHidden] = useState(true)

    function toggleDisplay() {
        if (hidden) {
        setHidden(false);
    }   else {
        setHidden(true)
    }};


    return (
        <div className="Component-List" id="Hotel-List">
            
            <h1 onClick={toggleDisplay}> <i className="material-icons" id="Dropdown-Arrow" onClick={toggleDisplay}  title="Show results" >expand_more</i> Hotels</h1> 
        
        {hidden ?
        <div className="Component-Map-Div"> 
        {businesses.map((business, i) => 
        <HotelResult key={i} business={business} onAdd={()=>onAdd(business)} onDelete={()=>onDelete(business)}/>)}
        </div>

        : null}
        </div>
    )
}

export default HotelResultsList;
