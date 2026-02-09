const express = require('express');

const app = express();

app.use('/add-product',(req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Add Product here</h1>');
});

app.use('/',(req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>hello from express</h1>');
});

// const server = http.createServer(app);

app.listen(3000);