import express from 'express';
import fetch from 'node-fetch';
// import { getClient } from '../db';

export const yelpRoutes = express.Router(); 
// const apiKey = process.env.REACT_APP_YELP_API_KEY;

yelpRoutes.get("/search", async (req, res) => {
    // console.log("/search");

    let location: string = req.query.location as string;

    try {
        const api_url = `https://api.yelp.com/v3/businesses/search?location=${location}`;

        let category:string = req.query.categories as string;

        if (category === "hotels") {
        let fetch_response1 = await fetch(api_url + "&categories=hotels", {
            headers: { 'Authorization': `Bearer QyWd6Rce5pLg83TEL20FxoVv8QF4MyQ6BHntGahHQ9LnOlsN1rJQ0V0Y5Z36Qw9FFKqH-qh_wGiS48rLJCElWhjLgt-4WrEOqVEWcNoUjL42pO8FyVonpSlsITr8YXYx` }
            });

        let json1 = await fetch_response1.json();
        console.log(json1)
        res.json(json1);
        }

        if (category === "food") {
        let fetch_response2 = await fetch(api_url + "&categories=food", {
            headers: { 'Authorization': `Bearer QyWd6Rce5pLg83TEL20FxoVv8QF4MyQ6BHntGahHQ9LnOlsN1rJQ0V0Y5Z36Qw9FFKqH-qh_wGiS48rLJCElWhjLgt-4WrEOqVEWcNoUjL42pO8FyVonpSlsITr8YXYx` }
            });

        let json = await fetch_response2.json();
        console.log(json)
        res.json(json);
        }

        // if (category === "") {
        //     let fetch_response2 = await fetch(api_url + "&categories=", {
        //         headers: { 'Authorization': `Bearer QyWd6Rce5pLg83TEL20FxoVv8QF4MyQ6BHntGahHQ9LnOlsN1rJQ0V0Y5Z36Qw9FFKqH-qh_wGiS48rLJCElWhjLgt-4WrEOqVEWcNoUjL42pO8FyVonpSlsITr8YXYx` }
        //         });
    
        //     let json = await fetch_response2.json();
        //     console.log(json)
        //     res.json(json);
        //     }
        
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