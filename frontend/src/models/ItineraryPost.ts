import { Business, YelpModel } from "./YelpModel";

// export interface ItineraryPost {
//     name: string;
//     rating: number;
//     price: number;
//     type: string;
//     time: number;
// }

export let itineraries: Business[] = [];

export function addFavorite(business:Business){
    itineraries.push(business);
    console.log(itineraries)
}

export function deleteFavorite(index: number) {
    itineraries.splice(index, 1);
}
