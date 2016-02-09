var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello World!');
});
server.listen(8080);
console.log('Init server in port 8080');
