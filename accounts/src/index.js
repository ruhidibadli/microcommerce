// import express from "express";
const express = require("express");
const db = require("../models");
const app = express();
app.use(express.json())
const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
    console.log("Started");
});



app.get('/', (req, res) => {
    const data = {
        ruhid:'ibadli',
        meslek:'developer'
    };
    res.status(200).json(data);
});

module.exports = app;