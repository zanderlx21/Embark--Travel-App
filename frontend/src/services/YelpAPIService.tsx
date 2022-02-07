import axios from "axios";
import { Business } from "../models/YelpModel";


const baseUrl = "http://localhost:5001/travelapp-f2d81/us-central1/api/search";

export const fetchBusinesses = (query: string) => {

  axios
  .get<Business[]>(baseUrl, {
    params: { location: query },
  })
  .then( res => console.log(res.data) )

    return axios
  .get<Business[]>((baseUrl), {
    params: { location: query },
  })
  .then( res => res.data )
}

// const response = await fetch(yelpBaseUrl);
// const json = await response.json();
// console.log(json);


// export function fetchSearchGiphy(query:string): Promise<Data[]> {

//   return axios.get("https://api.giphy.com/v1/gifs/search", {  
//   params: {
//       q: query,
//       api_key: apiKey
//   }})
  
// .then(response => response.data.data);
// }



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

