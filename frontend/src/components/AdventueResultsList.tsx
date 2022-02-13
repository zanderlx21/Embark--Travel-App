import { AdventureResult } from './AdventureResult';
import { Business } from '../models/YelpModel';

export interface MainProp {
    businesses: Business[];
    onAdd: (business: Business) => void;
    onDelete: (business: Business) => void;
}

function AdventureResultsList({businesses, onAdd, onDelete}:MainProp) {


    return (

        <div className='Component-List' id="Food-List">
            <h1>Adventure</h1>
        <div className="Component-Map-Div">
            
        {businesses.map( (business, i) => 
        <AdventureResult key={i} business={business} onAdd={()=>onAdd(business)} onDelete={()=>onDelete(business)}  />)} 

        </div>
        </div>
    )
}

export default AdventureResultsList;