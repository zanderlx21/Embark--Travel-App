import { Business } from "../models/YelpModel"
import { useState } from "react";
import Modal from "react-modal";
import { IndoorResultExpanded } from "../components/IndoorResultExpanded";

interface Prop {
    business: Business,
    onAdd: ()=> void
}

function IndoorResult({business, onAdd}:Prop) {

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
        // useEffect(() => {
    //     Modal.setAppElement('#Modal_Result');
    // });

    return (

        <div className="Component-Result" id="Indoor-Activity-Result">
            <img src={business.image_url} onClick={openModal} alt="image of Indoor Activity" />
            <p className="Business-Name-on-Card">{business.name}</p>
            <p className="Rating">{business.rating}</p>
            <p className="Price">{business.price}</p>

            <button id="Add-to-List-Button" onClick={onAdd} >Add to Itinerary</button>

            <div id="Modal-Result">
        {openExpanded && 

        <Modal
            isOpen={openExpanded}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >
        <IndoorResultExpanded business={business} onAdd={onAdd} onClose={closeModal}/>

        </Modal>
            }       
            </div>        

        </div>
    )
}
export default IndoorResult;