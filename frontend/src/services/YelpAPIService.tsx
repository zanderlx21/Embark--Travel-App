import axios from "axios";
import { Business } from "../models/YelpModel";

const yelpKey = process.env.REACT_APP_YELP_API_KEY;

const yelpBaseUrl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search";

export function fetchBusinesses(query:string): Promise<Business[]> {
  return axios
  .get<Business[]>(yelpBaseUrl, {
    params: { location: query },
    headers: { 'Authorization': `Bearer t5HwxxfxaWADS_AHoGrScK5Q_EpqRgvY5W1AsspOQvVOLdc12mGxgSipJaO_BjGRdZ_XrajLJ4ra2q6MuagMS1smD1UewS4op6Fky29rUj-BV_0t5ucijocorTf8YXYx` }
  })
  .then( res => res.data )
}

