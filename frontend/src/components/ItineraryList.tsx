import { useState } from "react";
import { Business } from "../models/YelpModel";
import { ItineraryPost } from "../models/ItineraryPost"
export function ItineraryList() {
    
    const [ favorites, setFavorites ] = useState<Business[]>([]);
    //     function handleDeleteFavorite(index: number){
//         console.log(index);
//         setFavorties(prev => [...prev.slice(0, index), ...prev.slice(index+1)])
//         deleteFavorite(index);
//         console.log(favorites)
//     }
    return (
        <div className="InineraryList">
            <h1>itinerary list</h1>
            {/* {favorites.map((recipe, i)=>
            <InineraryItem key={i} business={business} onDelete={()=>handleDeleteFavorite(i)} />)} */}
        </div>
    )
}