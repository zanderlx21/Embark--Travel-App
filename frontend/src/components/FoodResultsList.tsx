import { FoodResult } from './FoodResult';
import { Business } from '../models/YelpModel';

export interface MainProp {
    businesses: Business[];
}

function FoodResultsList({businesses}:MainProp) {

    return (

        <div className='Food-List'>
            <h1>Restaurants</h1>
        {businesses.map( (business, i) => 
        <FoodResult key={i} business={business} />)}
        </div>
    )
}

export default FoodResultsList;