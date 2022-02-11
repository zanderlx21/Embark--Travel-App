import { Business } from "../models/YelpModel"
import { useState, useEffect } from "react";
import Modal from "react-modal";
import { FoodResultExpanded } from "../components/FoodResultExpanded";
import { postItineraryItem, deleteItineraryItem } from "../services/YelpAPIService";


interface Prop {
    business: Business;
    onAdd: () => void;
    onDelete: () => void;
}

export function FoodResult({business, onAdd, onDelete}:Prop) {

    let [ openExpanded, setOpenExpanded ] = useState(false);
    
    let [ itineraryItems, setItineraryItems ] = useState<Business[]>([]);
    let [ hideTheAddButton, setHideTheAddButton] = useState(false)
    

//    function ClickHandler () {
//     if(hideAddButton){
//         onDelete()
//     } if (!hideAddButton){
//         onAdd()
//     }
//     hideAddButton ? setHideAddButton(true) : setHideAddButton(false)
//    }

function addToItinerary(business: Business){

    postItineraryItem(business);
    console.log(business);

    setHideTheAddButton(true);
    console.log(hideTheAddButton);
}

function deleteFromItinerary(business:Business) {
    deleteItineraryItem(business);

    let index = itineraryItems.findIndex(b => b._id === business._id);
        setItineraryItems(prev => [...prev.slice(0, index), ...prev.slice(index+1)])

    setHideTheAddButton(false)
    console.log(hideTheAddButton)
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

        // useEffect(() => {
    //     Modal.setAppElement('#Modal_Result');
    // });

    return (
        <div className="Component-Result">
            <img src={business.image_url} onClick={openModal} alt="image of Restaurant Lobby" />
            <p className="Business-Name-on-Card">{business.name}</p>
            <p className="Rating">{business.rating}</p>
            <p className="Price">{business.price}</p>

            {/* <button id="Add-to-List-Button" onClick={onAdd} >Add to Itinerary</button> */}
        <div id="Icon-Div"> 
        {(!hideTheAddButton) ? 
        <i className="material-icons" id="Add-to-list-Icon" onClick={()=>addToItinerary}  title="Add to Itinerary" >playlist_add</i>
        :

        <i className="material-icons" id="Add-to-list-Icon" onClick={()=>deleteFromItinerary} title="Remove to Itinerary" >playlist_remove</i>
}
                       

                
        </div>

            <div id="Modal-Result">

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
