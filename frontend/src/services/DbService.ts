import axios from "axios";
import { CityNames, CityName } from "../models/DbModels";
import { Business, YelpModel } from "../models/YelpModel";

export const fetchItineraryList = ():Promise<Business[]> => {
    return axios
      .get(("https://us-central1-travelapp-f2d81.cloudfunctions.net/api/itinerarylist"))
      .then( res => (res.data)
  )};
  
  // export const fetchItineraryCity = ():Promise <string[]> => {
  //   return axios
  //     .get(("https://us-central1-travelapp-f2d81.cloudfunctions.net/api/itinerarylist/citynames")
  //   , {
  //       // params: { location: city,
  //       // }
  //   })
  //     .then( res => (res.data)
  // )};
  
  export function postItineraryItem(business:Business): Promise<Business> {
    return axios.post<Business>("https://us-central1-travelapp-f2d81.cloudfunctions.net/api/itinerarylist", business)
    .then(res => res.data);
  }
  
  export function deleteItineraryItem(business:Business): Promise<Business> {
    return axios.delete<Business>("https://us-central1-travelapp-f2d81.cloudfunctions.net/api/itinerarylist", business)
    .then(res => res.data);
  }