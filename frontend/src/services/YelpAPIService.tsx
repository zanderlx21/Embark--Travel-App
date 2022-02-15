import axios from "axios";
import { Business, YelpModel } from "../models/YelpModel";
import { ReviewModel, Reviews } from "../models/ReviewModel";

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
      categories: "museums,aquariums,galleries"}
    })
    .then( res => res.data)
}

export const fetchOutdoor = (query: string):Promise<YelpModel> => {
  return axios
    .get<YelpModel>((baseUrl), {
      params: { location: query, 
      categories: "parks,zoos,beaches,boating,discgolf,fishing,paddleboarding,gardens,castles,boatcharters,bikerentals"}
    })
    .then( res => res.data)
}

export const fetchFitness = (query: string):Promise<YelpModel> => {
  return axios
    .get<YelpModel>((baseUrl), {
      params: { location: query, 
      categories: "fitness,yoga,gyms,meditationcenters"}
    })
    .then( res => res.data)
}

export const fetchRelaxation = (query: string):Promise<YelpModel> => {
  return axios
    .get<YelpModel>((baseUrl), {
      params: { location: query, 
      categories: "spa,massage,hotsprings"}
    })
    .then( res => res.data)
}

export const fetchAdventure = (query: string):Promise<YelpModel> => {
  return axios
    .get<YelpModel>((baseUrl), {
      params: { location: query, 
      categories: "hiking,canyoneering,climbing,hot_air_balloons,mountainbiking,paragliding,parasailing,rafting,rock_climbing,skydiving,zipline,snorkeling,surfing,tubing,jetskis,atvrentals,skiing"}
    })
    .then( res => res.data)
}
export const fetchFamily = (query: string):Promise<YelpModel> => {
  return axios
    .get<YelpModel>((baseUrl), {
      params: { location: query, 
      categories: "indoor_playcenter,kids_activities,lasertag,mini_golf,playgrounds,scavengerhunts,swimmingpools,trampoline,waterparks,zipline,bikerentals,virtualrealitycenters,amusementparks,escapegames"}
    })
    .then( res => res.data)
}

export const fetchNightlife = (query: string):Promise<YelpModel> => {
  return axios
    .get<YelpModel>((baseUrl), {
      params: { location: query, 
      categories: "bars,musicvenues,theater,lounges,barcrawl,beergardens,karaoke,pianobars,poolhalls,casinos,jazzandblues"}
    })
    .then( res => res.data)
}

// review data

export const fetchReviews = (id:string):Promise<Reviews> => {
  console.log(id);
  axios
    .get<Reviews>((`http://localhost:5001/travelapp-f2d81/us-central1/api/reviews/${id}`), {
    })
    .then( res => console.log(res.data));
  return axios
    .get<Reviews>((`http://localhost:5001/travelapp-f2d81/us-central1/api/reviews/${id}`), {
    })
    .then( res => res.data)
}


// EXTRA FORM for user entry at bottom of page, location already set by user, params = user entry
const baseUrlSetLocation = "http://localhost:5001/travelapp-f2d81/us-central1/api/usersearch"

export const fetchCategory = (query: string, query2: string):Promise<YelpModel> => {
  return axios
    .get<YelpModel>((baseUrlSetLocation), {
      params: { location: query, 
      categories: query2
    }
    })
    .then( res => res.data)
}

// /// Calling the DATABASE on the Frontend

// export const fetchItineraryList = ():Promise<Business[]> => {
//   return axios
//     .get(("http://localhost:5001/travelapp-f2d81/us-central1/api/itinerarylist"))
//     .then( res => (res.data)
// )};

// export const fetchItineraryCity = ():Promise<Business[]> => {
//   return axios
//     .get(("http://localhost:5001/travelapp-f2d81/us-central1/api/itinerarylist/cityname"))
//     .then( res => (res.data)
// )};

// export function postItineraryItem(business:Business): Promise<Business> {
//   return axios.post<Business>("http://localhost:5001/travelapp-f2d81/us-central1/api/itinerarylist", business)
//   .then(res => res.data);
// }

// export function deleteItineraryItem(business:Business): Promise<Business> {
//   return axios.delete<Business>("http://localhost:5001/travelapp-f2d81/us-central1/api/itinerarylist", business)
//   .then(res => res.data);
// }


