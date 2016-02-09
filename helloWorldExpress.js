var express = require('express');
var app = exports.app = express();
var port = 8080;
app.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1>')
});
app.listen(port, function () {
  console.log("INIT: ","==== Hello world server ====");
  console.log("INIT: ", "App started in port -> " + port);
  console.log("INIT: ", "App started in env -> " + (process.env.NODE_ENV  || 'development'));
  console.log("INIT: ", "Node version -> " + process.version);
});
