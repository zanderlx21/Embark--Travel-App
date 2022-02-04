import express from 'express';

const yelpRoutes = express.Router();

yelpRoutes.get("/", async (req, res) => {

    // try {
    //     const api_url = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search";
    //     const fetch_response = await fetch(api_url);
    //     const json = await fetch_response.json();

    //     console.log(json)
    //     // res.json(results);
    // }
    // catch (e){
    //     console.error("ERROR", e);
    //     res.status(500).json({message: "Internal Service Error"});
    // }
});