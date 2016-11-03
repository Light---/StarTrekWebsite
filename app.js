// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  	response.writeHead(200);
var express = require('express');
var app = express();
app.use(express.static('public'))
app.use('/static', express.static('public'))

 app.get('/Comments', function (req, res) {
  res.send('CommentsPage.html');
 });

  app.get('/MainPage', function (req, res) {
  res.send('MainPage.html');
  });

  app.get('/', function (req, res) {
  res.send('MainPage.html');
  });

});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);
console.log("Server running at LocalHost");
