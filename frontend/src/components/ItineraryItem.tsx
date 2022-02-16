import { Business } from "../models/YelpModel";
import "./ItineraryItem.css";

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

interface Props {
    business: Business
    onDelete: () => void;
}

export function ItineraryItem({business, onDelete}:Props) {

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
        <div className="Itinerary-Item">
            <h3>{business.name} | {business.location.city}</h3>

            <div className="Outer-Item-Div">

            <div className="Inner-Div1">
            <img src={business.image_url} height={100} width={100} />
            </div>
            <div className="Inner-Div2">
            <img id="Star-Rating" src={StarRating}/><i className="material-icons" id="Trash-Can" onClick={onDelete}>delete</i>
            <p id="Review-Number-inList">{business.review_count} reviews</p>
            <p>Price: {business.price}</p>
            <p>Open Now: {business.is_closed}</p> 
            <p>Phone: {business.display_phone}</p>
            <p>Address: {business.location.display_address}</p>
            <p><a href={business.url} target="_blank">Link to Yelp</a></p>

            </div>
            </div>

        </div>
    )
}


