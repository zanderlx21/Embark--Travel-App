import { Business } from '../models/YelpModel';
import "./ExtraFormResultsList.css"
import ExtraFormResult from '../components/ExtraFormResult';

export interface MainProp {
    businesses: Business[];
    onAdd: (business: Business) => void;
    onDelete: (business: Business) => void;
}

export function ExtraFormResultsList({businesses, onAdd, onDelete}:MainProp) {

    return (
        <div className='Component-List' id="Food-List">
            <h2></h2>

        <div className="Component-Map-Div-Extra">
        {businesses.map( (business, i) => 
        <ExtraFormResult key={i} business={business} onAdd={()=>onAdd(business)} onDelete={()=>onDelete(business)}  />)} 
        </div>
    
    
            
        </div>
    )
}
