document.getElementById("submit-btn").addEventListener('click', function() {

    var commentInput = document.getElementById('comment-input');

    var commentText = commentInput.value.trim();

    

    if (commentText) {

        var commentsDiv = document.getElementById('comments');

        var newComment = document.createElement('p');

        newComment.textContent = commentText;

        commentsDiv.appendChild(newComment);

        commentInput.value = '';

    }

});
