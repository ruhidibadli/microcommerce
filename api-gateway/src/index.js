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
  ignorePath:true,

};

const optionsAccount = {
  target: ACCOUNT_API_URL,
  changeOrigin: true, 
  logger: console,
};

const activityProxy = createProxyMiddleware(optionsActivity);
const accountProxy = createProxyMiddleware(optionsAccount);
app.use('/accounts', accountProxy);
app.use('/activity', activityProxy);

app.get('/', (req, res) => res.send('Hello Gateway API'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));