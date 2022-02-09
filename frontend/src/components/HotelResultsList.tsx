import { HotelResult } from './HotelResult';
import { Business } from '../models/YelpModel';

export interface MainProp {
    businesses: Business[];
    onAdd: (business:Business)=>void;
    // onDelete: (business:Business)=>void;
}

function HotelResultsList ({businesses, onAdd}:MainProp) {

    return (
        <div className="Hotel-List">
            <h1>Hotels</h1>     
        <div className="Hotel-Map-Div">
        {businesses.map((business, i) => <HotelResult key={i} business={business} onAdd={()=>onAdd(business)}/>)}
        </div>
        </div>
    )
}

export default HotelResultsList;
