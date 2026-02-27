const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodejs-learn','root','sAr@ng.akhade123', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;