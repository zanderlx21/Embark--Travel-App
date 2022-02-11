import {Business} from "../models/YelpModel";
import Modal from "react-modal";
import "./ResultsExpanded.css";

interface MainProp {
    business: Business;
    onAdd: ()=>void;
    onClose: ()=>void;
}

export function IndoorResultExpanded({business, onAdd, onClose}:MainProp) {
    return (
        <div className="Results-Expanded">
            <p className="Close"><i className="material-icons" onClick={onClose}>close</i></p>
            <p className="Expanded-Img"><img src={business.image_url} height={300} width={300}/></p>
            <h2 className="Expanded-H2">{business.name}</h2>

            <div className="Expanded-Result-Content">
            <p>Rating: {business.rating}</p>
            <p>Number of Reviews: {business.review_count}</p>
            <p>Price: {business.price}</p>
            <p>Open Now: {business.is_closed}</p>
            <p>Phone: {business.display_phone}</p>
            <p>Address: {business.location.display_address}</p>
            <p>Category: {business.categories.map((category, i) => <li key={i}> {category.title}/</li> )}</p>
            <p><a href={business.url} target="_blank">Link to Yelp</a></p> 
            </div>
            <button id="Add-to-List-Button" onClick={onAdd} >Add to Itinerary</button>
        </div>
    )
}