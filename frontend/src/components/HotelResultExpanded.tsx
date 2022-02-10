import {Business} from "../models/YelpModel";

interface MainProp {
    business: Business;
    onAdd: (business:Business)=>void;
}

export function HotelResultExpanded({business, onAdd}:MainProp) {
    return (
        <div className="Result">
            <p><img src={business.image_url} height={200} width={200}/></p>
            <p>{business.name}</p>
            <p>Rating: {business.rating}</p>
            <p>Number of Reviews: {business.review_count}</p>
            <p>Price: {business.price}</p>
            <p>Open Now: {business.is_closed}</p>
            <p>Phone: {business.display_phone}</p>
            <p>Address: {business.location}</p>
            <p>Category: {business.categories.map((category, i) => <li key={i}> {category.title}/</li> )}</p>
            <p><a href={business.url}>Link to Yelp</a></p>

            <button id="Add-to-List-Button" onClick={()=>onAdd} >Add to Itinerary</button>
        </div>
    )
}