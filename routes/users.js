const { getUsers } = require('../controllers/userController');

function usersRoute(req, res) {
    if (req.method === 'GET') {
        getUsers(req, res);
    } else {
        res.statusCode = 405;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'Method not allowed' }));
    }
}

module.exports = usersRoute;
