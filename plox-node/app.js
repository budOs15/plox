const express = require('express');
const app = express();

const usersRouter = require('./routes/users');
const vendorsRouter = require('./routes/vendors');
const productsRouter = require('./routes/products');
const ordersRouter = require('./routes/orders');
const cartRouter = require('./routes/cart');

app.use('/users', usersRouter);
app.use('/vendors', vendorsRouter);
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);
app.use('/cart', cartRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});