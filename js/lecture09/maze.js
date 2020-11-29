let youWon = true;
let started = false;
$(function(){
  $("div.boundary").mouseover(youLose);
  $("div#end").click(youWin);
  $("div#start").click(reset);
  $("div#maze").mouseleave(function (){
    if (started) {
      youLose();
      youWin();
    }
  });
});

function youLose() {
  $("div.boundary").addClass("youlose");
  started = false;
  youWon = false;
}

function youWin() {
  if (youWon)  $("h2#status").text("You win! :]");
  else  $("h2#status").text("Sorry, You lost! :[");
  started = false;
  youWon = true;
}

function reset() {
  $("div.boundary").removeClass("youlose");
  $("h2#status").text("Click the S to begin.");
  youWon = true;
  started = true;
}

