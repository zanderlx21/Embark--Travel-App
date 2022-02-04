import axios from "axios";

const yelpId = process.env.YELP_API_ID;
const yelpKey = process.env.YELP_API_KEY;
const yelpBaseUrl = "https://api.yelp.com/v3/";

export function fetchYelp() {
    return axios.get(`${yelpBaseUrl}+`,{
        // params:{
        //     app_id: yelpId,
        //     app_key: yelpKey
        // }
    })
    .then(res=>res.data)
}