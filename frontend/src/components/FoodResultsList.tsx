import { FoodResult } from './FoodResult';
import { Business, YelpModel } from '../models/YelpModel';

export interface MainProp {
    businesses: Business[];
}

function FoodResultsList({businesses}:MainProp) {

    return (
        <div className="FoodResultList">
            <h1>Food Results Placeholder</h1>
        <div>
        {businesses.map((business, i) => <FoodResult key={i} business={business} />)}

        </div>
        </div>
    )
}

export default FoodResultsList;