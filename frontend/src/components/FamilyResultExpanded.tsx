import {Business} from "../models/YelpModel";
import { useState, useEffect } from "react";
import { ReviewModel } from "../models/ReviewModel";
import { fetchReviews } from "../services/YelpAPIService";
import "./ResultsExpanded.css";

//importing Yelp Stars//
import zeroStars from './Yelp-Stars/0_stars.png'
import oneStar from './Yelp-Stars/1_star.png'
import oneHalfStars from './Yelp-Stars/1_half_stars.png'
import twoStars from './Yelp-Stars/2_stars.png'
import twoHalfStars from './Yelp-Stars/2_half_stars.png'
import threeStars from './Yelp-Stars/3_stars.png'
import threeHalfStars from './Yelp-Stars/3_half_stars.png'
import fourStars from './Yelp-Stars/4_stars.png'
import fourHalfStars from './Yelp-Stars/4_half_stars.png'
import fiveStars from './Yelp-Stars/5_stars.png'

interface MainProp {
    business: Business;
    onAdd: ()=>void;
    onClose: ()=>void;
}

export function FamilyResultExpanded({business, onAdd, onClose}:MainProp) {

    let [ reviews, setReviews ] = useState<ReviewModel[]>([]);

    useEffect(() => {
        fetchReviews(business.id).then((data) => setReviews(data.reviews))
    }, []);

    const [disable, setDisable] = useState(false);

    function clickButtonDisable() {
        onAdd();
        setDisable(true)
    }

      //This sets conditionals for Star Ratings
      let StarRating = "";

      if(business.rating === 0) {
        StarRating = zeroStars
      }
      if(business.rating === 1) {
        StarRating = oneStar
      }
      if(business.rating === 1.5) {
        StarRating = oneHalfStars
      }
      if(business.rating === 2) {
        StarRating = twoStars
      }
      if(business.rating === 2.5) {
        StarRating = twoHalfStars
      }
      if(business.rating === 3) {
        StarRating = threeStars
      }
      if(business.rating === 3.5) {
        StarRating = threeHalfStars
      }
      if(business.rating === 4) {
        StarRating = fourStars
      }
      if(business.rating === 4.5) {
        StarRating = fourHalfStars
      }
      if(business.rating === 5) {
        StarRating = fiveStars
      }

    return (
      <div className="Results-Expanded">
        <p className="Close"><i className="material-icons" onClick={onClose} id="X-Modal-Close">close</i></p>
          <div className="Results-Expanded-Left">
          <a href={business.url} className="Expanded-Img"><img src={business.image_url} id="Modal-Pic" height={300} width={300}/></a>
            <h2 className="Expanded-H2">{business.name}</h2>
            <img id="Star-Rating" src={StarRating}/>
            <p className="Review-Count">{business.review_count} reviews </p>
            <p id="Price-Modal">Price: {business.price}</p>
            <p id="Open-or-Closed">Open Now {business.is_closed}</p>
            <p className="Bold-This"><span>Phone:</span> {business.display_phone}</p>
            <p className="Bold-This"><span>Address:</span> {business.location.display_address}</p>
            <p className="Bold-This"><span>Categories:</span> {business.categories.map((category, i) => <li className="Category-Bullets" key={i}> - {category.title}</li> )}</p>
            </div>

          <div className="Reviews">
          <h1>Reviews:</h1> 
            {reviews.map((review, i) => 
          <div className="One-Review" key={i}> 
              <span className="Rating" id="Star-Rating"> Rating: <span id="Rating-In-Review">{review.rating}</span></span><br/>
                  <span className="Review-Text">{review.text} </span> 
                      <span className="Review-Link"> <a href={review.url} target={"_blank"} id="Review-Link">See Full Review</a> </span>
                          <span className="Review-Time"> <br/>{review.time_created} <br/></span>
          <a href={business.url} target="_blank"><img src="yelp_logo.png" className="Yelp-Logo"/></a>
                          </div> )}

                        <div id="Add-Button-Div">
                          <button id="Add-to-List-Button-Modal" disabled={disable} onClick={clickButtonDisable} >Add to Itinerary</button>
                          </div>

          </div>   
</div>
    )
}