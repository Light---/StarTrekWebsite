var express = require('express');
var app = express();

var comment1 = {
	id: 1,
	title: "Test",
	message: "This is a test comment"
};
var comment2 = {
	id: 2,
	title: "Teacher Alab",
	message: "Tech tapa are funz"
};
var comments = [
	comment1,
	comment2
];

app.use(express.static('public'));

app.get('/comments', function (req, res) {
  res.json(comments);
});


// Listen on Port Number and IP Address
app.listen(3000, function () {
	console.log("Server running at LocalHost");
});