import axios from "axios";
import { Business, YelpModel } from "../models/YelpModel";

/// Calling the DATABASE on the Frontend

export const fetchItineraryList = ():Promise<Business[]> => {
    return axios
      .get(("http://localhost:5001/travelapp-f2d81/us-central1/api/itinerarylist"))
      .then( res => (res.data)
  )};
  
  export const fetchItineraryCity = ():Promise<Business[]> => {
    return axios
      .get(("http://localhost:5001/travelapp-f2d81/us-central1/api/itinerarylist/cityname"))
      .then( res => (res.data)
  )};
  
  export function postItineraryItem(business:Business): Promise<Business> {
    return axios.post<Business>("http://localhost:5001/travelapp-f2d81/us-central1/api/itinerarylist", business)
    .then(res => res.data);
  }
  
  export function deleteItineraryItem(business:Business): Promise<Business> {
    return axios.delete<Business>("http://localhost:5001/travelapp-f2d81/us-central1/api/itinerarylist", business)
    .then(res => res.data);
  }