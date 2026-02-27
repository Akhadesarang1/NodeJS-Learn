const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodejs-learn',
    password: 'sAr@ng.akhade123'
});

module.exports = pool.promise();