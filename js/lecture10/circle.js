let circle_width = 50;
let speed = 250;
let growthAmount = 10;
let circles;
let movingCircles=[];
let startButton;
let stopButton;
let circleCt;

$(function(){
  circles = $("div.circles");
  startButton = $("#start");
  stopButton = $("#stop");
  clearCircles();

  circles.click(function () {
    clearCircles();
    circles.children().each((i, e) => {
      $(e).click();
    });
  });
  stopButton.click(function (){
    console.log(circles.children().length);
    console.log(movingCircles.length);
    clearCircles();
  });
  startButton.click(function (){
    circle_width = parseInt($("#circle-width").val());
    growthAmount = parseInt($("#growthAmount").val());
    speed = parseInt($("#speed").val());
    circleCt = parseInt($("#circleCt").val());
    circles.empty();
    clearCircles();
    for (let i=0; i< circleCt; i++) {
      let circle = $("<div id=" + "'circle" + i + "'"  + " class='circle'></div>");
      let pos = getRandomPosition();
      let color = getRandomColor();

      circle.css(
          {
            width: circle_width + 'px',
            height: circle_width + 'px',
            backgroundColor: color
          });
      circle.offset(
          {
            top: (pos.x + i),
            left: (pos.y + i)
          }
      );

      movingCircles.push(animateCircle(circle));

      circle.click(function (){
        circle.hide();
      });
      circles.append(circle);
    }
  });
});

function animateCircle(circle) {
  return setInterval(
      () => {
        circle.css({
          width: circle.width() + growthAmount + 'px',
          height: circle.height() + growthAmount + 'px',
        });
      }
      , speed
  );
}

function getRandomPosition() {
  const posx = (Math.random() * (Math.random()*10 + 50)).toFixed();
  const posy = (Math.random() * (Math.random()*10 + 50)).toFixed();
  return {
    x: posx,
    y: posy
  };
}

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function clearCircles() {
  if (movingCircles && movingCircles.length > 0) {
    for (let i=0; i< movingCircles.length; i++) {
      clearInterval(movingCircles[i]);
    }
  }
}


