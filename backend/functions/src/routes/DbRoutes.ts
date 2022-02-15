import express from 'express';
import { getClient } from '../db';
import { Business } from '../models/Business';

export const dbRoutes = express.Router(); 

///DATBASE

dbRoutes.get("/", async (req, res) => {
    try {
        const client = await getClient();
        const results = await client.db().collection<Business>("itinerary").find().sort({"location.city": 1}).toArray();
        console.log(results);
        res.json(results);
    } catch (err) {
        console.error("ERROR", err);
        res.status(500).json({ message: "Internal Server Error" });
        }
});

dbRoutes.get("/cityname", async (req, res) => {
    try {
        const client = await getClient();
        const results = await client.db().collection<Business>("itinerary").find().sort({"location.city": 1}).toArray();
        console.log(results);
        res.json(results);
    } catch (err) {
        console.error("ERROR", err);
        res.status(500).json({ message: "Internal Server Error" });
        }
});

dbRoutes.post("/", async (req, res) => {
    const item: Business = req.body as Business;
    console.log("hellooo" + item)

    try {
        const client = await getClient();
        await client.db().collection<Business>('itinerary').insertOne(item);
        res.status(201);
        console.log(item);
        res.json(item);

    }
    catch (e){
        console.error("ERROR", e);
        res.status(500).json({message: "Internal Service Error"});
    }
});

dbRoutes.delete("/", async (req, res) => {
    const item: Business = req.body as Business;

    try {
        const client = await getClient();
        await client.db().collection<Business>('itinerary').deleteOne(item);
        res.status(201);
        res.json(item);

    }
    catch (e){
        console.error("ERROR", e);
        res.status(500).json({message: "Internal Service Error"});
    }
});