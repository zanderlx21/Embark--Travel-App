import { useState } from "react";
import { Business } from "../models/YelpModel";
import { ItineraryList } from "./ItineraryList";
import { SearchTermProp } from "./Main";

export interface PropHeader {
    refresh: boolean;
}

function Header({refresh}: PropHeader) {
    const [hidden, setHidden] = useState<boolean>(true);

    function sliderClickHandler() {
    hidden ? setHidden(false) : setHidden(true)
    // console.log(hidden)
    }

    return (
        <nav className="Header-Nav">
            <h1 id="Logo-Header"><span id="Logo-E">e</span>mbark</h1>
            <button id="Itinerary-Slider" onClick={sliderClickHandler}>|</button>

            <div>
            {(!hidden) ? <ItineraryList refresh={refresh} /> : null}
            </div>
            
            {/* <div className="Menu-Icon">{menuIcon}</div> */}
            {/* <ul>
                <li><a href="#">Hotels</a></li>
                <li><a href="#">Food</a></li>
                <li><a href="#">Outdoors</a></li>
                <li><a href="#">Arts & Culture</a></li>
            </ul> */}
        </nav>
    )
}

export default Header;
