
import { HotelResult } from './HotelResult';
import { Business, YelpModel } from '../models/YelpModel';
import React from 'react';

export interface MainProp {
    businesses: Business[];
}

export function HotelResultsList ({businesses}:MainProp) {
    // console.log(businesses);

    return (

        <div className="Hotel-List">
            <h1>Hotels</h1>
        <div>
        {businesses.map((business, i) => <HotelResult key={i} business={business} />)}

        </div>
        </div>
    )
}

