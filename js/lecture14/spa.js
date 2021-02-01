let url = "https://jsonplaceholder.typicode.com/";
function displayComments() {
  $('#commentsInfo').toggle();
}
$(document).ready(function () {

  $("#send").click(updateData);

  $('#postInfo div').on('click', '.comments', function (evt) {
    console.log("show comments");
    evt.preventDefault();
    showComments();
  });

  function processCommentsInfo(comments) {
    console.log(comments);
    $("#commentRow").tmpl(comments,
        {
          dataArrayIndex: function (item) {
            return $.inArray(item, comments);
          }
        }).appendTo($('#commentsInfo'));
  }

  function showComments() {
    let postId = $("#postId").val();
    console.log(postId);
    let commentInfoUrl = url + "comments/?postId=" + postId;
    fetch(commentInfoUrl)
    .then(response => response.json())
    .then(json => processCommentsInfo(json))
  }

  function updateData() {
    let userId = $("#userId").val();
    let userInfoUrl = url + "users/" + userId;

    fetch(userInfoUrl)
    .then(response => response.json())
    .then(json => processUserInfo(json))
  }

  function processPostInfo(post) {
    console.log(post);
    $('#postRow').tmpl(post).appendTo($('#postInfo'));
    showComments();
  }

  function processUserInfo(user) {
    $('#userRow').tmpl(user).appendTo($('#userInfo'));
    let postInfoUrl = url + "posts/" + user.id;

    fetch(postInfoUrl)
    .then(response => response.json())
    .then(json => processPostInfo(json))
  }
});

