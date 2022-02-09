import { useState } from "react";
import { itineraries, deleteFavorite } from "../models/ItineraryPost";
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
        <div className="InineraryList">

            {itineraries.map((business, i)=> 
            <ItineraryItem key={i} business={business} onDelete={()=>handleDeleteFavorite(i)} 
            />)}
        </div>
    )
}
