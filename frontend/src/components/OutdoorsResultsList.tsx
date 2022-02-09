import { Business } from '../models/YelpModel';
import IndoorResult from './IndoorResult';

export interface MainProp {
    businesses: Business[];
}

function OutdoorResultsList({businesses}:MainProp) {
    return (
        <div className="Outdoors-List">
            <h1>Parks & Rec</h1>
            <h1>Indoor</h1>
            {businesses.map( (business, i) => 
            <IndoorResult key={i} business={business} />)}
        </div>
    )
}

export default OutdoorResultsList;
