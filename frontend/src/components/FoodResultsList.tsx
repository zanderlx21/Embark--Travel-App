import { FoodResult } from './FoodResult';
import { Business } from '../models/YelpModel';
// import { ItineraryPost } from '../models/ItineraryPost';

export interface MainProp {
    businesses: Business[];
    onAdd: (business: Business) => void;
}

function FoodResultsList({businesses, onAdd}:MainProp) {


    return (

        <div className='Component-List' id="Food-List">
            <h1>Restaurants</h1>
        <div className="Component-Map-Div">
        {businesses.map( (business, i) => 
        <FoodResult key={i} business={business} onAdd={()=>onAdd(business)}/>)} 
        </div>
        </div>
    )
}

export default FoodResultsList;