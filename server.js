const fs = require('fs');
const http = require('http');



// create a any server server
const server = http.createServer((req, res) => {
    res.end('hello from the server!');
});

server.listen(8000 , '127.0.0.1',() =>  {
console.log('listing to request on port 8000');
});
