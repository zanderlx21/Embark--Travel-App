import { FoodResult } from './FoodResult';
import { Business } from '../models/YelpModel';
import React from 'react';

export interface MainProp {
    businesses: Business[];
}

function FoodResultsList({businesses}:MainProp) {
    console.log(businesses);

    return (
        <div className="FoodResultList">
            <h1>Results Placeholder</h1>
        <div>
        {businesses.map((business, i) => <FoodResult key={i} business={business} />)}

        </div>
        </div>
    )
}

export default FoodResultsList;