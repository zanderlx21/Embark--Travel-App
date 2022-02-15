import { useState, useEffect } from "react";
import { fetchItineraryList, deleteItineraryItem, fetchItineraryCity } from "../services/DbService";
import { Business } from "../models/YelpModel";
import { ItineraryItem } from "./ItineraryItem";
import { SearchTermProp } from "./Main";
import "./ItineraryList.css";

export function ItineraryList({searchTerm}:SearchTermProp) {

    const [ itineraryItems, setItineraryItems ] = useState<Business[]>([]);
    

    useEffect( ()=> {
        fetchItineraryList().then(data => {
            setItineraryItems(data);
        });
    },[]);

    function deleteFromItinerary(business:Business) {
        deleteItineraryItem(business);

        let index = itineraryItems.findIndex(b => b._id === business._id);
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