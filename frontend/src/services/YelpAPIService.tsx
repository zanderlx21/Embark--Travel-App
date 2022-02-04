import axios from "axios";
import { Business } from "../models/YelpModel";

const yelpKey = process.env.REACT_APP_YELP_API_KEY;

const yelpBaseUrl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search";

export function fetchBusinesses(query:string): Promise<Business[]> {
  return axios
  .get<Business[]>(yelpBaseUrl, {
    params: { location: query },
    headers: { 'Authorization': `Bearer ${yelpKey}` }
  })
  .then( res => res.data )
}

