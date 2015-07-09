var Shockwave = function (x, y) {
  this.x = x;
  this.y = y;

  this.centerX = x;
  this.centerY = y;

  this.radius = 10;
};

Shockwave.prototype.draw = function(ctx) {
  ctx.save();
  {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true); 
    ctx.lineWidth = 2; 
    ctx.strokeStyle = "white";
    ctx.stroke();
  }
  ctx.restore();
};

Shockwave.prototype.update = function(time) {
  this.radius = this.radius + 4;
};
