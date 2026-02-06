const fs = require('fs');

// HOME ROUTE
const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/' ) {

    res.setHeader('Content-Type', 'text/html');

    res.write(`
        <html>
            <head>
                <title>Enter message</title>
            </head>
            <body>
                <form action="/message" method="POST">
                    <input type="text" name="message">
                    <button type="submit">Send</button>
                </form>
            </body>
        </html>
    `);

    return res.end(); // stop execution
}


// MESSAGE ROUTE
if (url === '/message' && method === 'POST') {

    const body = [];

    req.on('data', (chunk) => {
        console.log(chunk);
        body.push(chunk);
    });

    req.on('end', () => {

        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];

        fs.writeFile('message.txt', message, (err) => {

            if (err) {
                console.error(err);
            }

            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end(); // response sent once
        });

    });

    return; // VERY IMPORTANT → prevent double response
}


// DEFAULT RESPONSE
res.setHeader('Content-Type', 'text/html');

res.write(`
    <html>
        <head>
            <title>My First Page</title>
        </head>
        <body>
            <h1>Hello from my node.js server</h1>
        </body>
    </html>
`);

res.end();

};

// module.exports = requestHandler;  // Exports single value.

// module.exports = {
//     handler : requestHandler,
//     someText : 'Anything'
// }; // Exports object

// module.exports.handler = requestHandler;
// module.exports.someText = 'Anything';

exports.handler = requestHandler;
exports.someText = 'Anythinggggggg';