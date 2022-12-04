const http = require('http');

const server = http.createServer((request, response) => {
    response.end('Hey! This is your server response!');
  });

server.listen(3000);