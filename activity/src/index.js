const app = require('express')();
const { sequelize, connectDb } = require("../db/conf");
app.get('/', (req, res) => res.send('Hello Activity, API!'));

app.listen(8080, async () => {
    await connectDb();
    console.log(`Products API listening on port 8080!`);
});
