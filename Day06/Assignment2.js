// my code

const express = require('express');

const app = express();

// middleware for all routes
app.use((req, res, next) => {
    console.log('/middleware');
    next();
});

// middleware only for /users
app.use('/users', (req, res, next) => {
    console.log('/user middleware');
    res.send('<h1> the middleware that handles just /users</h1>');
});

app.listen(3000);

// instructors code
// const express = require('express');

// const app = express();

// // app.use((req, res, next) => {
// //   console.log('First Middleware');
// //   next();
// // });

// // app.use((req, res, next) => {
// //   console.log('Second Middleware');
// //   res.send('<p>Assignment solved (almost!)</p>');
// // });

// app.use('/users', (req, res, next) => {
//     console.log('/users middleware');
//     res.send('<p>The Middleware that handles just /users</p>');
// });

// app.use('/', (req, res, next) => {
//     console.log('/ middleware');
//     res.send('<p>The Middleware that handles just /</p>');
// });


// app.listen(3000);
