import IndoorResult from './IndoorResult';
import { Business } from '../models/YelpModel';

export interface MainProp {
    businesses: Business[];
}

function IndoorResultsList({businesses}:MainProp) {
    return (

    <div className='Food-List'>
        <h1>Indoor</h1>
            {businesses.map( (business, i) => 
            <IndoorResult key={i} business={business} />)}
</div>
)
}


export default IndoorResultsList;