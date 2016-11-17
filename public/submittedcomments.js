function renderComments(commentsAsHTML){
	var container = document.getElementById("comments");
  	container.innerHTML = commentsAsHTML;
}


window.onload = function () {

  // Load all of the comments
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/comments", false);
  xhr.send(null);
  
  var response = xhr.response;
  var comments = JSON.parse(response);
  var commentsAsHTML = "";

  for(var i = 0; i < comments.length; i++) {
	var comment = comments[i]
	var commentAsHTML = (		
		"<div class='comment'>" +
			"<h1>" + comment.title + "</h1>" +
			"<div>" + comment.message + "</div>" +
		"</div>"
	);

	commentsAsHTML += commentAsHTML;
  }

  renderComments(commentsAsHTML)

  // Listen to the submit button
  
  var submitComment = document.getElementById("btnSubmit")
  submitComment.onclick = function () {

	var title = document.getElementById("title").value
	var message = document.getElementById("message").value

	var newComment = {
		//id: 2,
		title: title,
		message: message
	};

  	alert(JSON.stringify(newComment));
  }

}