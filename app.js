var express = require('express');
var app = express();

app.use(express.static('public'))

// Listen on Port Number and IP Address
app.listen(3000, function () {
console.log("Server running at LocalHost");
})