// import express from "express";
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json())

const auth = require("./authentication.js");
app.use('/accounts/auth', auth);

const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
    console.log("Started");
});


app.get('/accounts/', (req, res) => {
    const data = {
        ruhid:'ibadli',
        meslek:'developer'
    };
    res.status(200).json(data);
});

module.exports = app;