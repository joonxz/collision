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
