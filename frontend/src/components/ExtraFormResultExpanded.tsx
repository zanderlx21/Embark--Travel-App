import {Business} from "../models/YelpModel";
import Modal from "react-modal";
import { useState, useEffect } from "react";
import { ReviewModel } from "../models/ReviewModel";
import { fetchReviews } from "../services/YelpAPIService";
import "./ExtraFormResultsList.css";

interface MainProp {
    business: Business;
    onAdd: (business:Business)=>void;
    onClose: ()=>void;
}

export function ExtraFormResultExpanded({business, onAdd, onClose}:MainProp) {

    let [ reviews, setReviews ] = useState<ReviewModel[]>([]);

    useEffect(() => {
        fetchReviews(business.id).then((data) => setReviews(data.reviews))
    }, []);

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
            <p>Reviews: {reviews.map((review, i) => 
            <li key={i}> 
                <span className="Rating" id="Star-Rating"> Rating: {review.rating}</span><br/>
                    <span className="Review-Text">{review.text} </span> 
                        <span className="Review-Link"> <a href={review.url} target={"_blank"}>See Full Review</a> </span>
                            <span className="Review-Time"> <br/>{review.time_created} <br/></span>
                            </li> )}</p>
            </div>
            <button id="Add-to-List-Button" onClick={()=>onAdd} >Add to Itinerary</button>
        </div>
    )
}