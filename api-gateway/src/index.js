const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 8083;

const {
  ACCOUNT_API_URL,
  ACTIVITY_API_URL,
  PRODUCT_API_URL,
  ORDER_API_URL,
  CART_API_URL,
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

const optionsProduct = {
  target: PRODUCT_API_URL,
  changeOrigin: true, 
  logger: console,
};

const optionsOrder = {
  target: ORDER_API_URL,
  changeOrigin: true, 
  logger: console,
};

const optionsCart = {
  target: CART_API_URL,
  changeOrigin: true, 
  logger: console,
};

const authMiddleware = require('./auth-middleware');


const activityProxy = createProxyMiddleware(optionsActivity);
const accountProxy = createProxyMiddleware(optionsAccount);
const productProxy = createProxyMiddleware(optionsProduct);
const orderProxy = createProxyMiddleware(optionsOrder);
const cartProxy = createProxyMiddleware(optionsCart);
// app.use(authMiddleware)
app.use('/accounts', accountProxy);
app.use('/activity', activityProxy);
app.use('/products', productProxy);
app.use('/orders', orderProxy);
app.use('/cart', cartProxy);

app.get('/', (req, res) => res.send('Hello Gateway API'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));