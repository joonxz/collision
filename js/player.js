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
  // this.x = Math.sin(time / 1000) * 100 + this.centerX;
  // this.y = Math.cos(time / 1000) * 100 + this.centerY;

  var distance = Math.sqrt(Math.pow(Circle.x - this.x, 2) + Math.pow(Circle.y - this.y, 2));
  // console.log(distance);
  // this.x = this.x - Circle.distance;
  // this.y = this.y - Circle.distance;
};


