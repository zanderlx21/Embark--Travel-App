import { HotelResult } from './HotelResult';
import { Business } from '../models/YelpModel';
import { useRef } from 'react';

export interface MainProp {
    businesses: Business[];
    onAdd: (business:Business)=>void;
    // onDelete: (business:Business)=>void;
}


function HotelResultsList ({businesses, onAdd}:MainProp) {

    return (
        <div className="Component-List" id="Hotel-List">
            <h1>Hotels</h1>     
        <div className="Component-Map-Div">
        {businesses.map((business, i) => 
        <HotelResult key={i} business={business} onAdd={()=>onAdd(business)}/>)}
        </div>
        </div>
    )
}

export default HotelResultsList;
