const sequelize = require('../config/connection');
const { User, Post } = require('../models/Index');

const userdata = [
    {
        username: 'aceking',
        email: 'acek@gmail.com',
        password: 'password123'
    },
    {
        username: 'mikewillard',
        email: 'mikew@gmail.com',
        password: 'password1234'
    },
    {
        username: 'tookiedavis',
        email: 'tookied@gmail.com',
        password: 'password1235'
    }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;