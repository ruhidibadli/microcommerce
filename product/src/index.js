const app = require('express')();
const bodyParser = require('body-parser');
// app.use(cors());



app.use(bodyParser.json());
app.listen(8080, async () => {
    console.log(`Products API listening on port 8080!`);
});
app.get('/', (req, res) => res.send('Hello Product, API!'));
