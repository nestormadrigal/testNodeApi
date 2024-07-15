const url = require('url');
const users = require('./users');
const frecuentQuestions = require('./frecuentQuestions');

const routes = {
    '/users': users,
    '/frecuent-questions': frecuentQuestions
};

function handleRequest(req, res) {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const route = routes[path] || notFound;

    route(req, res);
}

function notFound(req, res) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'Route not found' }));
}

module.exports = { handleRequest };
