const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('your connection string', {
    useNewUrlParser: true,
});

app.listen(8000, ()=>{console.log('server started at 8000')})

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());
const productRoutes = require('./api/routes/product');

app.use('/products', productRoutes);

module.exports = app;
