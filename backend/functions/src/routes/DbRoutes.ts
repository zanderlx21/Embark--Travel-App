import express from 'express';
import { getClient } from '../db';
import { Business } from '../models/Business';

export const dbRoutes = express.Router(); 

///DATBASE

dbRoutes.get("/", async (req, res) => {
    try {
        const client = await getClient();
        const results = await client.db().collection<Business>("itinerary").find().toArray();
        res.json(results);
    } catch (err) {
        console.error("ERROR", err);
        res.status(500).json({ message: "Internal Server Error" });
        }
});

dbRoutes.post("/", async (req, res) => {
    const item: Business = req.body as Business;

    try {
        const client = await getClient();
        await client.db().collection<Business>('itinerarylist').insertOne(item);
        res.status(201);
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
        await client.db().collection<Business>('itinerarylist').deleteOne(item);
        res.status(201);
        res.json(item);

    }
    catch (e){
        console.error("ERROR", e);
        res.status(500).json({message: "Internal Service Error"});
    }
});