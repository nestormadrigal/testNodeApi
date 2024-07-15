const http = require('http');
const { handleRequest } = require('./routes');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    handleRequest(req, res);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
