import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";

//import routes

const app = express();
app.use(cors());
app.use(express.json());

export const api = functions.https.onRequest(app);

