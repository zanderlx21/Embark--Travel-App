import { Business } from "../models/YelpModel"
import { useState, useEffect } from "react";
import {HotelResultExpanded} from "../components/HotelResultExpanded";
import Modal from 'react-modal';

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
    onAdd: ()=>void
    onDelete: ()=>void
}

export function HotelResult({business, onAdd, onDelete}:MainProp) {

    let [ openExpanded, setOpenExpanded ] = useState(false);
    let [ hideTheAddButton, setHideTheAddButton] = useState(false)

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
  
    function openModal() {
        setOpenExpanded(true);
    }
    function closeModal() {
        setOpenExpanded(false);
    }
  
    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
    };

    useEffect(() => {
        Modal.setAppElement('#Modal-Result');
    });

    return (

    <div className="Component-Result">
        <img src={business.image_url} onClick={openModal} alt="image of Restaurant Lobby" id="Result-Img" />
        <p className="Business-Name-on-Card">{business.name}</p>
        <img id="Star-Rating" src={StarRating}/>
        <p className="Price">{business.price}</p>

        <div id="Icon-Div"> 
        {(!hideTheAddButton) ? 
        <i className="material-icons" id="Add-to-list-Icon" onClick={handleAdd}  title="Add to Itinerary" >playlist_add</i>
        :
        <i className="material-icons" id="Add-to-list-Icon" onClick={handleDelete} title="Remove to Itinerary" >playlist_remove</i>
}
</div>
        {/* <button id="Add-to-List-Button" onClick={onAdd} >Add to Itinerary</button> */}

        <div id="Modal-Result">
        {openExpanded && 

        <Modal
            isOpen={openExpanded}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >
        <HotelResultExpanded business={business} onAdd={onAdd} onClose={closeModal}/>

        </Modal>
            }       
            </div>

        </div>
    )
}