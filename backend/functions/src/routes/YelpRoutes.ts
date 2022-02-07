import express from 'express';
// import { getClient } from '../db';
import fetch from 'node-fetch';

export const yelpRoutes = express.Router(); 

yelpRoutes.get("/", async (req, res) => {

    try {
        const api_url = 'https://api.yelp.com/v3/businesses/search?location=';

        let location: string = req.query.location as string;
        console.log(location);

        const fetch_response = await fetch(api_url + location, {
            headers: { 'Authorization': `Bearer QyWd6Rce5pLg83TEL20FxoVv8QF4MyQ6BHntGahHQ9LnOlsN1rJQ0V0Y5Z36Qw9FFKqH-qh_wGiS48rLJCElWhjLgt-4WrEOqVEWcNoUjL42pO8FyVonpSlsITr8YXYx` }
            });
        const json = await fetch_response.json();
        console.log(json)
        res.json(json);
    }
    catch (e){
        console.error("ERROR", e);
        res.status(500).json({message: "Internal Service Error"});
    }
});




//     try {
//         const client = await getClient();
//         const results = await client.db().collection("yelpSearch").find().toArray();
//         res.json(results);
//     } catch (err) {
//         console.error("ERROR", err);
//         res.status(500).json({ message: "Internal Server Error" });
//         }
// });