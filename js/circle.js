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
