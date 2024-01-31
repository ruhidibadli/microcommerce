const app = require('express')();

app.get('/activity', (req, res) => res.send('Hello Orders, API!'));

app.listen(8080, () => console.log(`Products API listening on port 8080!`));
