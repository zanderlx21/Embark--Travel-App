import { Business } from "./YelpModel";
import { postItineraryItem } from "../services/YelpAPIService";

// export let itineraries: Business[] = [];

export function addFavorite(business:Business){
    postItineraryItem(business);
    console.log(business)
}

export function deleteFavorite(index: number) {
    // itineraries.splice(index, 1);
}

