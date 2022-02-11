import express from 'express';
import fetch from 'node-fetch';

export const yelpRoutes = express.Router(); 
// const apiKey = process.env.REACT_APP_YELP_API_KEY;


yelpRoutes.get("/search", async (req, res) => {

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

            let json2 = await fetch_response2.json();
            console.log(json2)
            res.json(json2);
        }

        if (category === "museums,aquariums,galleries") {
            let fetch_response3 = await fetch(api_url + "&categories=museums,aquariums,galleries", {
                headers: { 'Authorization': `Bearer QyWd6Rce5pLg83TEL20FxoVv8QF4MyQ6BHntGahHQ9LnOlsN1rJQ0V0Y5Z36Qw9FFKqH-qh_wGiS48rLJCElWhjLgt-4WrEOqVEWcNoUjL42pO8FyVonpSlsITr8YXYx` }
            });
    
            let json3 = await fetch_response3.json();
            console.log(json3)
            res.json(json3);
        }
        if (category === "parks,zoos,beaches,boating,discgolf,fishing,paddleboarding,gardens,castles,boatcharters,bikerentals") {
            let fetch_response4 = await fetch(api_url + "&categories=parks,zoos,beaches,boating,discgolf,fishing,paddleboarding,gardens,castles,boatcharters,bikerentals", {
                headers: { 'Authorization': `Bearer QyWd6Rce5pLg83TEL20FxoVv8QF4MyQ6BHntGahHQ9LnOlsN1rJQ0V0Y5Z36Qw9FFKqH-qh_wGiS48rLJCElWhjLgt-4WrEOqVEWcNoUjL42pO8FyVonpSlsITr8YXYx` }
            });
        
            let json4 = await fetch_response4.json();
            console.log(json4)
            res.json(json4);
        }
        if (category === "fitness,yoga,gyms,meditationcenters") {
            let fetch_response5 = await fetch(api_url + "&categories=fitness,yoga,gyms,meditationcenters", {
                headers: { 'Authorization': `Bearer QyWd6Rce5pLg83TEL20FxoVv8QF4MyQ6BHntGahHQ9LnOlsN1rJQ0V0Y5Z36Qw9FFKqH-qh_wGiS48rLJCElWhjLgt-4WrEOqVEWcNoUjL42pO8FyVonpSlsITr8YXYx` }
            });
        
            let json5 = await fetch_response5.json();
            console.log(json5)
            res.json(json5);
        }
        if (category === "spa,massage,hotsprings") {
            let fetch_response6 = await fetch(api_url + "&categories=spa,massage,hotsprings", {
                headers: { 'Authorization': `Bearer QyWd6Rce5pLg83TEL20FxoVv8QF4MyQ6BHntGahHQ9LnOlsN1rJQ0V0Y5Z36Qw9FFKqH-qh_wGiS48rLJCElWhjLgt-4WrEOqVEWcNoUjL42pO8FyVonpSlsITr8YXYx` }
            });
        
            let json6 = await fetch_response6.json();
            console.log(json6)
            res.json(json6);
        }
        if (category === "hiking,canyoneering,climbing,hot_air_balloons,mountainbiking,paragliding,parasailing,rafting,rock_climbing,skydiving,zipline,snorkeling,surfing,tubing,jetskis,atvrentals,skiing") {
            let fetch_response7 = await fetch(api_url + "&categories=hiking,canyoneering,climbing,hot_air_balloons,mountainbiking,paragliding,parasailing,rafting,rock_climbing,skydiving,zipline,snorkeling,surfing,tubing,jetskis,atvrentals,skiing", {
                headers: { 'Authorization': `Bearer QyWd6Rce5pLg83TEL20FxoVv8QF4MyQ6BHntGahHQ9LnOlsN1rJQ0V0Y5Z36Qw9FFKqH-qh_wGiS48rLJCElWhjLgt-4WrEOqVEWcNoUjL42pO8FyVonpSlsITr8YXYx` }
            });
        
            let json7 = await fetch_response7.json();
            console.log(json7)
            res.json(json7);
        }

        if (category === "indoor_playcenter,kids_activities,lasertag,mini_golf,playgrounds,scavengerhunts,swimmingpools,trampoline,waterparks,zipline,bikerentals,virtualrealitycenters,amusementparks,escapegames") {
            let fetch_response8 = await fetch(api_url + "&categories=indoor_playcenter,kids_activities,lasertag,mini_golf,playgrounds,scavengerhunts,swimmingpools,trampoline,waterparks,zipline,bikerentals,virtualrealitycenters,amusementparks,escapegames", {
                headers: { 'Authorization': `Bearer QyWd6Rce5pLg83TEL20FxoVv8QF4MyQ6BHntGahHQ9LnOlsN1rJQ0V0Y5Z36Qw9FFKqH-qh_wGiS48rLJCElWhjLgt-4WrEOqVEWcNoUjL42pO8FyVonpSlsITr8YXYx` }
            });
        
            let json8 = await fetch_response8.json();
            console.log(json8)
            res.json(json8);
        }
        if (category === "bars,musicvenues,theater,lounges,barcrawl,beergardens,karaoke,pianobars,poolhalls,casinos,jazzandblues") {
            let fetch_response9 = await fetch(api_url + "&categories=bars,musicvenues,theater,lounges,barcrawl,beergardens,karaoke,pianobars,poolhalls,casinos,jazzandblues", {
                headers: { 'Authorization': `Bearer QyWd6Rce5pLg83TEL20FxoVv8QF4MyQ6BHntGahHQ9LnOlsN1rJQ0V0Y5Z36Qw9FFKqH-qh_wGiS48rLJCElWhjLgt-4WrEOqVEWcNoUjL42pO8FyVonpSlsITr8YXYx` }
            });
        
            let json9 = await fetch_response9.json();
            console.log(json9)
            res.json(json9);
        }

            // else {
            //     let fetch_response11 = await fetch(api_url + categories, {
            //         headers: { 'Authorization': `Bearer QyWd6Rce5pLg83TEL20FxoVv8QF4MyQ6BHntGahHQ9LnOlsN1rJQ0V0Y5Z36Qw9FFKqH-qh_wGiS48rLJCElWhjLgt-4WrEOqVEWcNoUjL42pO8FyVonpSlsITr8YXYx` }
            //     });
            
            //     let json11 = await fetch_response11.json();
            //     console.log(json11)
            //     res.json(json11);
            //     }

            }

    
    catch (e){
        console.error("ERROR", e);
        res.status(500).json({message: "Internal Service Error"});
    }
});

