import axios from "axios";
import { CityNames, CityName } from "../models/DbModels";
import { Business, YelpModel } from "../models/YelpModel";

export const fetchItineraryList = ():Promise<Business[]> => {
    return axios
      .get(("http://localhost:5001/travelapp-f2d81/us-central1/api/itinerarylist"))
      .then( res => (res.data)
  )};
  
  // export const fetchItineraryCity = ():Promise <string[]> => {
  //   return axios
  //     .get(("http://localhost:5001/travelapp-f2d81/us-central1/api/itinerarylist/citynames")
  //   , {
  //       // params: { location: city,
  //       // }
  //   })
  //     .then( res => (res.data)
  // )};
  
  export function postItineraryItem(business:Business): Promise<Business> {
    return axios.post<Business>("http://localhost:5001/travelapp-f2d81/us-central1/api/itinerarylist", business)
    .then(res => res.data);
  }
  
  export function deleteItineraryItem(business:Business): Promise<Business> {
    return axios.delete<Business>("http://localhost:5001/travelapp-f2d81/us-central1/api/itinerarylist", business)
    .then(res => res.data);
  }