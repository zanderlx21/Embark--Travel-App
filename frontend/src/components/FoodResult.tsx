import { Business } from "../models/YelpModel"
import { useState } from "react";
import Modal from "react-modal";
import { FoodResultExpanded } from "../components/FoodResultExpanded";

interface Prop {
    business: Business;
    onAdd: ()=>void;
}

export function FoodResult({business, onAdd}:Prop) {

    let [ openExpanded, setOpenExpanded ] = useState(false);
  
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

    return (
        <div className="Component-Result">
            <img src={business.image_url} onClick={openModal} alt="image of Restaurant Lobby" />
            <p className="Business-Name-on-Card">{business.name}</p>
            <p className="Rating">{business.rating}</p>
            <p className="Price">{business.price}</p>
            {/* <button id="Add-to-List-Button" onClick={onAdd} >Add to Itinerary</button> */}
        <div id="Icon-Div">            
                <i className="material-icons" id="Add-to-list-Icon" onClick={onAdd} >add_to_photos</i>
        </div>
            {/* <i className="material-icons" id="Add-to-list-Icon" onClick={onAdd} >add_to_photos</i> */}
            <div className="Modal-Result">
        {openExpanded && 

        <Modal
            isOpen={openExpanded}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >
        <FoodResultExpanded business={business} onAdd={onAdd} onClose={closeModal}/>

        </Modal>
            }       
            </div>
        </div>
    )
}
