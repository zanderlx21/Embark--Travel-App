import IndoorResult from './IndoorResult';
import { Business } from '../models/YelpModel';

export interface MainProp {
    businesses: Business[];
    onAdd: (business:Business)=>void;
    onDelete: (business: Business) => void
}

function IndoorResultsList({businesses, onAdd, onDelete}:MainProp) {
    return (

    <div className='Component-List' id="Indoor-List">
            <h1>Arts & Culture</h1>

    <div className="Component-Map-Div">

        {businesses.map( (business, i) => 
        <IndoorResult key={i} business={business} onAdd={()=>onAdd(business)} onDelete={()=>onDelete(business)}/>)}
        
        </div>
        </div>
)
}

export default IndoorResultsList;