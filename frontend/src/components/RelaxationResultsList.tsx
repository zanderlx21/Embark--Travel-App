import { FitnessResult } from './FitnessResult';
import { Business } from '../models/YelpModel';
// import { ItineraryPost } from '../models/ItineraryPost';

export interface MainProp {
    businesses: Business[];
    onAdd: (business: Business) => void;
    onDelete: (business: Business) => void;
}

function RelaxationResultsList({businesses, onAdd, onDelete}:MainProp) {


    return (

        <div className='Component-List' id="Food-List">
            <h1>Relaxation</h1>
        <div className="Component-Map-Div">
            
        {businesses.map( (business, i) => 
        <FitnessResult key={i} business={business} onAdd={()=>onAdd(business)} onDelete={()=>onDelete(business)}  />)} 

        </div>
        </div>
    )
}

export default RelaxationResultsList;