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

  // collision detection

  // var collide = function () {
  //   var distX = shape1.x - shape2.x;
  //   var distY = shape1.y - shape2.y;
  //   var distance = Math.sqrt
  // };

  var gp = navigator.getGamepads()[0];
  console.log(gp);

  
 
  if (gp.connected == true ) {
    document.getElementById('js-connected').innerHTML = "Gamepad Connected: " + gp.id;
  };
  
  var draw = function () {
    var gp = navigator.getGamepads()[0];
    console.log(gp.axes[1]);

    // Gamepad Axes mapping including deadzone threshold
    joystickX = gp.axes[0] > 0.1 ? gp.axes[0] : 0.0 || gp.axes[0] < -0.1 ? gp.axes[0] : 0.0;
    joystickY = gp.axes[1] > 0.1 ? gp.axes[1] : 0.0 || gp.axes[1] < -0.1 ? gp.axes[1] : 0.0;

    for (var i = 0; i < gp.buttons.length; i++) {
      if (gp.buttons[i].pressed == true) {
        console.log(gp.buttons[i] + gp.buttons[i].pressed);
      }
    };

    // for (var i = 0; i < gp.axes.length; i++) {
    //   console.log(gp.axes[i] + gp.axes[i].pressed);
    // };

    
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
