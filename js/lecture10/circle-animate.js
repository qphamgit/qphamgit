// let new_width = 50;
// let speed = 250;
// let growthAmount = 10;
// let circle;
// let count = 1;
// $(function(){
//   circle = $("div.circle");
//   animateCircle();
//   function animateCircle() {
//     new_width = new_width + growthAmount;
//     count+=1;
//     console.log(count);
//     if (new_width > window.innerWidth) circle.stop();
//     else
//       circle.animate({height: new_width,
//                             width: new_width,
//                             "border-radius": new_width/2},
//                             250,animateCircle());
//   }
//   circle.click(function (){
//     circle.stop();
//     circle.hide();
//   });
//   $("#increase").click(startAnimation());
//   function startAnimation(){
//     circle.stop();
//     new_width = $("#circle-width").val();
//     growthAmount = $("#growthAmount").val();
//     speed = $("#speed").val();
//     circle.css({"width": new_width,
//       "height": new_width,
//       "border-radius": new_width/2},);
//     animateCircle();
//   }
//
// });
//
