const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 8083;

const {
  ACCOUNT_API_URL,
  ACTIVITY_API_URL,
} = require('./urls');

const optionsActivity = {
  target: ACTIVITY_API_URL,
  changeOrigin: true, 
  logger: console,
};

const optionsAccount = {
  target: ACCOUNT_API_URL,
  changeOrigin: true, 
  logger: console,
};

const activityProxy = createProxyMiddleware(optionsActivity);
const accountProxy = createProxyMiddleware(optionsAccount);

app.get('/', (req, res) => res.send('Hello Gateway API'));
app.get('/accounts', accountProxy);
app.get('/activity', activityProxy);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));