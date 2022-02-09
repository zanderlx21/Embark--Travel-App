import { useState } from "react";
import { deleteFavorite } from "../models/ItineraryPost";
import { Business } from "../models/YelpModel";
import { ItineraryItem } from "./ItineraryItem";


export function ItineraryList() {
    
    const [ favorites, setFavorites ] = useState<Business[]>([]);

        function handleDeleteFavorite(index: number){
        console.log(index);
        setFavorites(prev => [...prev.slice(0, index), ...prev.slice(index+1)])
        deleteFavorite(index);
        console.log(favorites)
    }

    return (
        <div className="Itinerary-List">
            <h2>Your Itinerary</h2>
            {/* {itineraries.map((business, i)=> 
            <ItineraryItem key={i} business={business} onDelete={()=>handleDeleteFavorite(i)} 
            />)} */}
        </div>
    )
}
