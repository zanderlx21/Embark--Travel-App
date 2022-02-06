import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";

//import routes

const app = express();
app.use(cors());
app.use(express.json());

// const api_url = "https://api.yelp.com/v3/businesses/search";
// const fetch_response = await fetch(api_url);
// const json = await fetch_response.json();
// console.log(json)

export const api = functions.https.onRequest(app);

