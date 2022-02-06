import express from 'express';
// import { getClient } from '../db';
import fetch from 'node-fetch';

export const yelpRoutes = express.Router(); 

yelpRoutes.get("/search", async (req, res) => {
//     try {
//         const client = await getClient();
//         const results = await client.db().collection("yelpSearch").find().toArray();
//         res.json(results);
//     } catch (err) {
//         console.error("ERROR", err);
//         res.status(500).json({ message: "Internal Server Error" });
//         }
// });

    try {
        const api_url = "https://api.yelp.com/v3/businesses/search";
        // {
            //     params: { location: query },
            //     headers: { 'Authorization': `Bearer ${yelpKey}` }
            //   })
        const fetch_response = await fetch(api_url);
        const json = await fetch_response.json();
        console.log(json)
        res.json(json);
    }
    catch (e){
        console.error("ERROR", e);
        res.status(500).json({message: "Internal Service Error"});
    }
});