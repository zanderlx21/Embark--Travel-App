import axios from "axios";
import { Business, YelpModel } from "../models/YelpModel";

const baseUrl = "http://localhost:5001/travelapp-f2d81/us-central1/api/search";

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


//for console logging
  //   axios.get<Business[]>(baseUrl, {
  //   params: { location: query, categories: "hotels" },
  // })
  // .then( res => console.log(res.data) )


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

