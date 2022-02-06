import axios from "axios";
import { Business } from "../models/YelpModel";


const yelpBaseUrl = "http://localhost:5001/travelapp-f2d81/us-central1/api/search";
export const fetchBusinesses = async (query: string) => {
const response = await fetch(yelpBaseUrl);
const json = await response.json();
console.log(json);
}




//"https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses"

// export function fetchBusinesses(query:string): Promise<Business[]> {
  //for consoling logging purposes:
  //  axios
  // .get<Business[]>(yelpBaseUrl, {
  //   params: { location: query },
  //   headers: { 'Authorization': `Bearer ${yelpKey}` }
  // })
  // .then( res => console.log(res.data) )
  
//   return axios
//   .get<Business[]>(("/search"), {
//     params: { location: query },
//     headers: { 'Authorization': `Bearer ${yelpKey}` }
//   })
//   .then( res => res.data )
// }

