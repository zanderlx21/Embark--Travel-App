import { useState, useEffect } from "react";
import { fetchItineraryList } from "../services/YelpAPIService";
import { Business } from "../models/YelpModel";
import { ItineraryItem } from "./ItineraryItem";
import { deleteItineraryItem } from "../services/YelpAPIService";
import { SearchTermProp } from "./Main";
import "./ItineraryList.css";

export function ItineraryList({searchTerm}:SearchTermProp) {

    const [ itineraryItems, setItineraryItems ] = useState<Business[]>([]);

    useEffect( ()=> {
        fetchItineraryList().then(data => {
            setItineraryItems(data);
        });
    },[]);
    // console.log(itineraryItems)

    function deleteFromItinerary(business:Business) {
        deleteItineraryItem(business);

        function deleteItem(index: number) {
            itineraryItems.splice(index, 1);

            setItineraryItems(prev => [...prev.slice(0, index), ...prev.slice(index+1)])
            deleteItem(index);
            console.log(index)
        }

        // let handleDeleteItem = (index: number) => {
        //     setItineraryItems(prev => [...prev.slice(0, index), ...prev.slice(index+1)])
        //     deleteItem(index);
        //     console.log(index)
        // }
    }

    return (
        <div className="Itinerary-List">
            <h2 className="H2-Itinerary-List">Your Itinerary for {searchTerm}</h2>
            {itineraryItems.map((business, i)=> 
            <ItineraryItem key={i} business={business} onDelete={()=>deleteFromItinerary(business)}/>)}
        </div>
    )
}