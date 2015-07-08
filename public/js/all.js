var Circle = function (x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
};

Circle.prototype.update = function(time) {
  
};

Circle.prototype.draw = function(ctx) {
  ctx.save();
  {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true); 
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  ctx.restore();
};

Circle.prototype.collidesWith = function(otherCircle) {
  var sumRadius = otherCircle.radius + this.radius;
  var distance = Math.sqrt(Math.pow(otherCircle.x - this.x, 2) + Math.pow(otherCircle.y - this.y, 2));
  return distance <= sumRadius;
};

// clear canvas then loop through all objects and draw
var draw = function () {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  for (var i = 0; i < entities.length; i++) {
    entities[i].draw(ctx);
  };
};
var Enemy = function (x, y, radius, color) {
  this.x = x;
  this.y = y;

  this.centerX = x;
  this.centerY = y;

  this.radius = radius;
  this.color = color;
};

Enemy.prototype = new Circle;

Enemy.prototype.update = function(time) {
  this.x = Math.sin(time / 1000) * 100 + this.centerX;
  this.y = Math.cos(time / 1000) * 100 + this.centerY;
};

var player = new Circle(50, 40, 40, 'red');

var entities = [];

entities.push(new Enemy(300, 300, 20, 'green'));
entities.push(new Enemy(150, 150, 20, 'blue'));
entities.push(player);
// gets available gamepad - in this case XBOX 360 controller
var gpActive = function () {
var gp = navigator.getGamepads()[0];

  if (gp) {
    // Gamepad Axes mapping including deadzone threshold
    joystickX = Math.abs(gp.axes[0]) > 0.1 ? gp.axes[0] : 0.0 ;
    joystickY = Math.abs(gp.axes[1]) > 0.1 ? gp.axes[1] * -1 : 0.0;
  }

};
// updates variables according to whats pressed
var handleInput = function () {
  gpActive();
  player.x += (joystickX * 2);
  player.y -= (joystickY * 2);
};

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var canvasWidth = canvas.clientWidth;
var canvasHeight = canvas.clientHeight;

var joystickX = 0;
var joystickY = 0;


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
// Game logic will go in the simulation function
var simulation = function (time) {
  player.color = 'red';

  for (var i = 0; i < entities.length; i++) {
    entities[i].update(time);
  }

  for (var i = 0; i < entities.length; i++) {
    var entity = entities[i];

    if (entity instanceof Enemy) { 
      // refactor to OOP to have a collided state and normal
      if (player.collidesWith(entity)) {
        player.color = 'orange';
      }     
    }
  }
};