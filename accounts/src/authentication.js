const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { Users } = require("../models");
const users = {};
const axios = require('axios');

router.get('/', async (req, res) => {
    res.json({ ruhid:'ibadli' });
});


const jwt_secret = process.env.JWT_SECRET;


router.post('/register', async (req, res) => {
    const {username, password, email, first_name, last_name, role} = req.body;
    console.log(password);
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await Users.create({
        username: username,
        password:hashedPassword,
        email:email,
        first_name:first_name,
        last_name:last_name,
        role:role
    })
    res.status(201).send("User registrated successfully!");
});

router.post('/login', async (req, res) => {
    const {username, password} = req.body;
    const user = await Users.findOne({
        where: {
            username: username
        }
    });
    const hashedPassword = user.password;
    if (!hashedPassword || !(await bcrypt.compare(password, hashedPassword))){
        return res.status(401).send("Invalid username or password!");
    }
    console.log(username);
    const token = jwt.sign({ username }, jwt_secret, {expiresIn: '1h'});
    axios.post('http://activity:8080/activity/create_activity/', {
        username: username,
        detail: 'User logged in',
        activity_type: 'login',
    })
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });

    res.json({ token });
});


router.post('/verify', async (req, res) => {
    // const token = req.headers.authorization?.split(' ')[1];
    const token = req.body.token;
    if (!token) return res.status(401).send('Token not provided!');
    jwt.verify(token, jwt_secret, (err, decoded) => {
        if (err) return res.status(403).send('Token Invalid!');
        res.json(decoded);
    });
});

module.exports = router;