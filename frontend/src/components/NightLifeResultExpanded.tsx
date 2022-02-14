import {Business} from "../models/YelpModel";
import { useState } from "react";
import "./ResultsExpanded.css";

interface MainProp {
    business: Business;
    onAdd: ()=>void;
    onClose: ()=>void;
    onDelete: () => void;
}

export function NightLifeResultExpanded({business, onAdd, onClose, onDelete}:MainProp) {

    let [ hideTheAddButton, setHideTheAddButton] = useState(false)
    
    function handleAdd() {
        setHideTheAddButton(true);
        console.log(hideTheAddButton)
        onAdd();
      }

      function handleDelete() {
        setHideTheAddButton(false);
        console.log(hideTheAddButton)
        onDelete();
      }
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

            <div id="Add-To-List"> 
        {(!hideTheAddButton) ? 
        <i className="material-icons" id="Add-to-list-Icon" onClick={handleAdd}  title="Add to Itinerary" >playlist_add</i>
        :
        <i className="material-icons" id="Add-to-list-Icon" onClick={handleDelete} title="Remove to Itinerary" >playlist_remove</i>
}             
                
        </div>
        </div>
    )
}