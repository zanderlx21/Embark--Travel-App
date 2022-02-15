import { useState, useEffect } from "react";
import { fetchItineraryList, deleteItineraryItem } from "../services/DbService";
import { Business } from "../models/YelpModel";
import { ItineraryItem } from "./ItineraryItem";
import { SearchTermProp } from "./Main";
import { CityNames, CityName } from "../models/DbModels";
import "./ItineraryList.css";

export function ItineraryList({searchTerm}:SearchTermProp) {

    const [ itineraryItems, setItineraryItems ] = useState<Business[]>([]);
    const [ cityNames, setCityNames ] = useState<string[]>([]);
    const [ cityName, setCityName ] = useState<CityName>();
    

    useEffect( ()=> {
        fetchItineraryList().then(data => {
            setItineraryItems(data);
        });
        // just for retreiving all city names in database
        // fetchItineraryCity().then(data=> {
        //     setCityNames(data);
        //     console.log(cityNames);
        // });
        // then will have another fetch to receive specific info from those cities?
    },[]);

    function deleteFromItinerary(business:Business) {
        deleteItineraryItem(business);

        let index = itineraryItems.findIndex(b => b.id === business.id);
            setItineraryItems(prev => [...prev.slice(0, index), ...prev.slice(index+1)])
    }

    return (
        <div className="Itinerary-List">
            <h2 className="H2-Itinerary-List"><p className="Itinerary-List-Name">Your Itinerary</p></h2>
            {itineraryItems.map((business, i)=> 
            <ItineraryItem key={i} business={business} onDelete={()=>deleteFromItinerary(business)}/>)}
        </div>
    )
}