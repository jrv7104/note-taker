// import express from "express";
// import apiRouter from "./routes/api.js";
const express = require ("express");
const path = require("path");
const db = require("./db/db.json");
const fs = require("fs");
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static("public"));

app.use(express.json());
// app.use("/api", apiROUTER);

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "public/notes.html"));
})

app.get("/api/notes", (req, res) => {
    res.json(db)
})

app.post("/api/notes", (req, res) => {
    const newData = req.body;

    db.push(newData)

    fs.writeFileSync("./db/db.json", JSON.stringify(db))
    res.json(newData)
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
})

app.listen(PORT, () => console.info(`Listening on PORT: $(PORT)`));