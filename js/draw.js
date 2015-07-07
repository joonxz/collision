// clear canvas then loop through all objects and draw
var draw = function () {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  for (var i = 0; i < entities.length; i++) {
    entities[i].draw(ctx);
  };
};