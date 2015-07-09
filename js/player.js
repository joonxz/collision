var Player = function (x, y, radius, color) {
  this.x = x;
  this.y = y;

  this.centerX = x;
  this.centerY = y;

  this.radius = radius;
  this.color = color;
};

Player.prototype = new Circle;

Player.prototype.update = function(time) {
  
};
