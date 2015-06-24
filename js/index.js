(function () {
  "use strict";

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var canvasWidth = canvas.clientWidth;
  var canvasHeight = canvas.clientHeight;

  var x = 0;
  var y = 0;
  var joystickX = 0;
  var joystickY = 0;
  
  var rect = function (x, y, l, w) {
    ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect (x, y, l, w);
  };
  
  var circle = function (x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2, true); 
    ctx.closePath();
    ctx.fillStyle = "rgb(0,200,0)";
    ctx.fill();
  };

  var clear = function () {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  };

  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37:
          // left
          joystickX = -1;
          break;
      case 38:
          // up
          joystickY = 1;
          break;
      case 39:
          // right
          joystickX = 1;
          break;
      case 40:
          // down
          joystickY = -1;
          break;
    }
  };

  document.onkeyup = function(e) {
    switch (e.keyCode) {
      case 37:
          joystickX = 0;
          break;
      case 38:
          joystickY = 0;
          break;
      case 39:
          joystickX = 0;
          break;
      case 40:
          joystickY = 0;
          break;
    }
  };

  var draw = function () {
    clear();

    ctx.save();
    x = x + (joystickX * 2);
    y = y - (joystickY * 2);
    rect(30 + x, 20 + y, 50,50);
    ctx.restore();

    ctx.save();
    circle(300,300,40);

    window.requestAnimationFrame(draw);
  };

  window.requestAnimationFrame(draw);
  

})();


// canvas.addEventListener("mousedown", function (e) {

//   for (var i = 0; i < spots.length; i++) {
//     // applied the pythagorean theorem
//     var dx = spots[i].x - mousePos.x;
//     var dy = spots[i].y - mousePos.y;
//     var distSquared = dx * dx + dy * dy;
//     var radiusSquared = spots[i].radius * spots[i].radius;

//     var drag = function () {
      
//     }

//     if (distSquared < radiusSquared) {
//       // spots[i].drag();
//       console.log("im in there");
//     } 

//   };
  
// }); 