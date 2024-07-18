const http = require('http');
const { handleRequest } = require('./routes');

const port = process.env.PORT || 4000;


const server = http.createServer((req, res) => {
    handleRequest(req, res);
});

server.listen(port, () => {
    console.log(`Server running at port:${port}/`);
});
