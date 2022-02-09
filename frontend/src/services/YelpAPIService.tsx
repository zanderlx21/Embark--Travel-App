import axios from "axios";
import { Business, YelpModel } from "../models/YelpModel";

const baseUrl = "http://localhost:5001/travelapp-f2d81/us-central1/api/search";


/// API
export const fetchFood = (query: string):Promise<YelpModel> => {
    return axios
      .get<YelpModel>((baseUrl), {
        params: { location: query,
          categories: "food"
        }}
        )
      .then( res => (res.data)
)}

export const fetchHotels = (query: string):Promise<YelpModel> => {
  return axios
    .get<YelpModel>((baseUrl)
    , {
      params:{ location: query,
        categories: "hotels"
      }}
      )
    .then( res => (res.data)
    )}

export const fetchIndoor = (query: string):Promise<YelpModel> => {
  return axios
    .get<YelpModel>((baseUrl), {
      params: { location: query, 
      categories: "museums,aquariums,escapegames"}
    })
    .then( res => res.data)
}

export const fetchOutdoor = (query: string):Promise<YelpModel> => {
  return axios
    .get<YelpModel>((baseUrl), {
      params: { location: query, 
      categories: "parks,zoos"}
    })
    .then( res => res.data)
}


/// DATABASE

export const fetchItineraryList = ():Promise<Business[]> => {
  return axios
    .get(("http://localhost:5001/travelapp-f2d81/us-central1/api/itinerarylist"))
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


