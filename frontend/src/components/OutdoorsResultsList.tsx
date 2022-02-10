import { Business } from '../models/YelpModel';
import OutdoorResult from './IndoorResult';

export interface MainProp {
    businesses: Business[];
    onAdd: (business: Business)=>void
}

function OutdoorResultsList({businesses, onAdd}:MainProp) {
    return (
        <div className="Component-List" id="Outdoor-List">
            
            <h1>Outdoor Activities</h1>

            <div className="Component-Map-Div">
                
            {businesses.map( (business, i) => 
            <OutdoorResult key={i} business={business} onAdd={()=>onAdd(business)}/>)}
            </div>

        </div>
    )
}

export default OutdoorResultsList;
