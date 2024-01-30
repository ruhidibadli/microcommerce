// import express from "express";
const express = require("express");

const app = express();
app.use(express.json())


app.get('', (req, res) => {
    const data = {
        ruhid:'ibadli',
        meslek:'developer'
    };
    res.status(200).json(data);
});

module.exports = app;