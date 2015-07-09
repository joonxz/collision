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
  // player boundary ---------
  if (this.x + this.radius < this.radius * 2) {
    this.x = this.radius;
  } else if ( this.x - this.radius > canvasWidth - (this.radius * 2)) {
    this.x = canvasWidth - this.radius;
  }

  if (this.y + this.radius < this.radius * 2) {
    this.y = this.radius;
  } else if ( this.y - this.radius > canvasHeight - (this.radius * 2)) {
    this.y = canvasHeight - this.radius;
  }
  // -------------------------
};
