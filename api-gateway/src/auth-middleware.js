const express = require("express");
const axios = require("axios");

const authMiddleware = (req, res, next) => {

    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).send('Token not provided!');
    postData = {
        token: token
    }    


    axios.post('http://localhost:8081/accounts/auth/verify', postData)
    .then((response) => {
        console.log(response.data);
        next();
    })
    .catch((error) => {
        console.error(error);
        res.status(403).send('Token Invalid!');
    });
}

module.exports = authMiddleware;