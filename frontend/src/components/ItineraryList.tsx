import { useState, useEffect } from "react";
import { fetchItineraryList } from "../services/YelpAPIService";
import { Business } from "../models/YelpModel";
import { ItineraryItem } from "./ItineraryItem";
import { deleteItineraryItem } from "../services/YelpAPIService";

export function ItineraryList() {

    const [ itineraryItems, setItineraryItems ] = useState<Business[]>([]);

    useEffect( ()=> {
        fetchItineraryList().then(data => {
            setItineraryItems(data);
        });
        function handleDeleteItem(index:number) {
        setItineraryItems(prev => [...prev.slice(0, index), ...prev.slice(index+1)])
        deleteItineraryItem(index);
        }
        
    },[]);

    console.log(itineraryItems)

    function deleteFromItinerary(business:Business) {
        deleteItineraryItem(business);
    }

    return (
        <div className="Itinerary-List">
            <h2>Your Itinerary</h2>
            {itineraryItems.map((business, i)=> 
            <ItineraryItem key={i} business={business} onDelete={()=>deleteFromItinerary(business)}/>)}
        </div>
    )
}
