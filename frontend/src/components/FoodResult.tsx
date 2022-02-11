import { Business } from "../models/YelpModel"
import { useState, useEffect } from "react";
import Modal from "react-modal";
import { FoodResultExpanded } from "../components/FoodResultExpanded";

interface Prop {
    business: Business;
    onAdd: () => void;
    onDelete: () => void;
    // hideButton: boolean;
}

export function FoodResult({business, onAdd, onDelete}:Prop) {

    let [ openExpanded, setOpenExpanded ] = useState(false);
    let [ hideAddButton, setHideAddButton] = useState(false)

    let [ hideTheAddButton, setHideTheAddButton] = useState(false)
    

//    function ClickHandler () {
//     if(hideAddButton){
//         onDelete()
//     } if (!hideAddButton){
//         onAdd()
//     }
//     hideAddButton ? setHideAddButton(true) : setHideAddButton(false)
//    }
      


    
  
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
        {(!hideAddButton) ? 
        <i className="material-icons" id="Add-to-list-Icon" onClick={onAdd}  title="Add to Itinerary" >playlist_add</i>
        :
        <i className="material-icons" id="Add-to-list-Icon" onClick={onDelete} title="Remove to Itinerary" >playlist_remove</i>
}
                       
                
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
