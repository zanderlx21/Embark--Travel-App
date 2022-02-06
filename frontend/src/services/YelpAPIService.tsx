import axios from "axios";
import { Business } from "../models/YelpModel";

const yelpKey = process.env.REACT_APP_YELP_API_KEY;
// const yelpBaseUrl = "https://api.yelp.com/v3/businesses";
//"https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses"

// from other example
const yelpBaseUrl = "/search";

export const fetchBusinesses = async (query:string) => {
const response = await fetch(yelpBaseUrl + "?");
const json = await response.json();
console.log(json);
}

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

