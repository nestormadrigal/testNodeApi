const { getAllUsers } = require('../models/userModel');

function getUsers(req, res) {
    const users = getAllUsers();
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(users));
}

module.exports = { getUsers };
