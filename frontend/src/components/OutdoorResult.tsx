import { Business } from "../models/YelpModel"
import { useState } from "react";
import Modal from "react-modal";
import { OutdoorResultExpanded } from "../components/OutdoorResultExpanded";

interface Prop {
    business: Business;
    onAdd: ()=> void;
    onDelete: ()=> void
}

function OutdoorResult({business, onAdd, onDelete}:Prop) {

    let [ openExpanded, setOpenExpanded ] = useState(false);
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

        <div className="Component-Result" id="Outdoor-Result">
            <img src={business.image_url} onClick={openModal} alt="image of Outdoor Activity" />
            <p className="Business-Name-on-Card">{business.name}</p>
            <p className="Rating">{business.rating}</p>
            <p className="Price">{business.price}</p>

            <button id="Add-to-List-Button" onClick={onAdd} >Add to Itinerary</button>

            <div id="Icon-Div"> 
        {(!hideTheAddButton) ? 
        <i className="material-icons" id="Add-to-list-Icon" onClick={handleAdd}  title="Add to Itinerary" >playlist_add</i>
        :
        <i className="material-icons" id="Add-to-list-Icon" onClick={handleDelete} title="Remove to Itinerary" >playlist_remove</i>}  
        </div>

            <div id="Modal-Result">
            {openExpanded && 

            <Modal
                isOpen={openExpanded}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                >
            <OutdoorResultExpanded business={business} onAdd={onAdd} onClose={closeModal}/>

            </Modal>
                }       
                </div>  
        </div>
    )
}
 
export default OutdoorResult;