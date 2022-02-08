import { HotelResult } from './HotelResult';
import { Business } from '../models/YelpModel';

export interface MainProp {
    businesses: Business[];
}

function HotelResultsList ({businesses}:MainProp) {
    // console.log(businesses);

    return (

        <div className="Hotel-List">
            <h1>Hotels</h1>
        <div className="Hotel-Map-Div">
        {businesses.map((business, i) => <HotelResult key={i} business={business} />)}
        </div>
        </div>
    )
}

export default HotelResultsList;

