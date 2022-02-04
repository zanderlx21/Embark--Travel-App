import axios from "axios";

import { Business } from "../models/YelpModel";

const yelpId = process.env.YELP_API_ID;
const yelpKey = process.env.YELP_API_KEY;
const yelpBaseUrl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search";

// let config = {
//   method: 'get',
//   url: `${yelpBaseUrl}`,
//   headers: { 
//     'Authorization': `Bearer ${yelpKey}`
//   }
// };

export function fetchBusinesses(query:string): Promise<Business[]> {
  return axios
  .get<Business[]>(yelpBaseUrl, {
    params: { location: query},
    headers: { 'Authorization': `Bearer QyWd6Rce5pLg83TEL20FxoVv8QF4MyQ6BHntGahHQ9LnOlsN1rJQ0V0Y5Z36Qw9FFKqH-qh_wGiS48rLJCElWhjLgt-4WrEOqVEWcNoUjL42pO8FyVonpSlsITr8YXYx` },
    // query: { query }
  })
  .then( res => res.data )
}

