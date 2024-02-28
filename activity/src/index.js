const app = require('express')();
const bodyParser = require('body-parser');
app.get('/', (req, res) => res.send('Hello Activity, API!'));

app.listen(8080, async () => {
    console.log(`Products API listening on port 8080!`);
});

app.use(bodyParser.json());

const { Activity } = require('../models');



app.post('/activity/create_activity/', async (req, res) => {
    console.log(req.body);
    const {username, detail, activity_type} = req.body;
    const newActivity = await Activity.create({
        username: username,
        detail:detail,
        activity_type:activity_type,
    })

    res.status(200).json(newActivity);
});

app.get('/activity/activities', async (req, res) => {
    const activities = await Activity.findAll();
    res.status(200).json(activities);
});