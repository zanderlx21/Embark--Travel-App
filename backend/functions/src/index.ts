import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import { yelpRoutes } from "./routes/YelpRoutes";
import { dbRoutes } from "./routes/DbRoutes";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", yelpRoutes);
app.use("/itinerarylist", dbRoutes);

export const api = functions.https.onRequest(app);

