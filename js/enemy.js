var Enemy = function (x, y, radius, color) {
  this.x = x;
  this.y = y;

  this.centerX = x;
  this.centerY = y;

  this.velocity = {x:1, y:0.5};
  this.radius = radius;
  this.color = color;
};

Enemy.prototype = new Circle;

Enemy.prototype.update = function(time) {
  
  // logic to have enemies get closer to player -----
  var deltaX = player.x - this.x;
  var deltaY = player.y - this.y;
  var angle = Math.atan2(deltaY, deltaX);
  
  var vectorX = Math.cos(angle);
  var vectorY = Math.sin(angle);

  this.velocity.x = vectorX;
  this.velocity.y = vectorY;

  this.x = this.x + this.velocity.x;
  this.y = this.y + this.velocity.y;

};


