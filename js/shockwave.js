var Shockwave = function (x, y) {
  this.x = x;
  this.y = y;

  this.centerX = x;
  this.centerY = y;

  this.radius = player.radius - 10;
  this.alpha = 1;
  // this.visible = 
};

Shockwave.prototype.draw = function(ctx) {
  ctx.save();
  {
    if (this.radius <= player.radius + 50) {
      ctx.globalAlpha = this.alpha;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true); 
      ctx.lineWidth = 2; 
      ctx.strokeStyle = "white";
      ctx.stroke();
    }
  }
  ctx.restore();
};

Shockwave.prototype.update = function(time) {
  // increases size of circle per frame 
  this.radius = this.radius + 2;

  // decreases opacity per frame
  this.alpha = this.alpha - 0.03;
};
