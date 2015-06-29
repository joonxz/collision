(function () {
  "use strict";

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var canvasWidth = canvas.clientWidth;
  var canvasHeight = canvas.clientHeight;

  var joystickX = 0;
  var joystickY = 0;

  // gets available gamepad - in this case XBOX 360 controller
  var gpActive = function () {
    var gp = navigator.getGamepads()[0];

    // Gamepad Axes mapping including deadzone threshold
    joystickX = Math.abs(gp.axes[0]) > 0.1 ? gp.axes[0] : 0.0 ;
    joystickY = Math.abs(gp.axes[1]) > 0.1 ? gp.axes[1] * -1 : 0.0;
  };
  
  // create array for objects
  var circleList = {};

  // define Circle object
  var Circle = function (id,x,y,r,c) {
    var whatever = {
      id:id,
      x:x,
      y:y,
      r:r,
      c:c
    };
    circleList[id] = whatever;
  }

  // drawing params for circle onto canvas
  var drawCircle = function (circle) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI*2, true); 
    ctx.closePath();
    ctx.fillStyle = circle.c;
    ctx.fill();
    ctx.restore();
  };

  // declare characters
  Circle('ship',50,40,40,'rgb(200,0,0)');
  Circle('earth',300,300,40,'rgb(0,200,0');

  // mapping
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

  // helper to declare whether the gamepad is connected or not on load
  var gp = navigator.getGamepads()[0];
  console.log(gp);

  if (gp.connected == true ) {
    document.getElementById('js-connected').innerHTML = "Gamepad Connected: " + gp.id;
  };
  // -------------------

  // updates variables according to whats pressed
  var handleInput = function () {
    gpActive();
    circleList.ship.x += (joystickX * 2);
    circleList.ship.y -= (joystickY * 2);
  };

  // Game logic and will go in the simulation function
  var simulation = function (time) {
    // circleList.earth.x = Math.sin(time / 1000) * 100 + 300.0;
    // circleList.earth.y = Math.cos(time / 1000) * 100 + 300.0;
  };

  // clear canvas then loop through all objects and draw
  var draw = function () {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    for (var id in circleList) {
      drawCircle(circleList[id]);
    };
  };

  // doFrame function name is game loop convention name
  var doFrame = function (time) {
    handleInput();
    simulation(time);
    draw();

    // loop request
    window.requestAnimationFrame(doFrame);
  };

  // initial request
  window.requestAnimationFrame(doFrame);
  

})();
