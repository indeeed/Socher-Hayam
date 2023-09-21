import express from "express";
import { api } from "./api";

const app = express();

// app.get("/api/hi", (req, res) => res.send("Hello"));

app.use(api);

app.listen(3002, () => console.log("Server started"));
