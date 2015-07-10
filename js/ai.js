var ai = function () {
   var MAX_AHEAD = 50;
   // var ahead = 

  var badGuys = entities.filter(function (entity) {
    entity.color = 'blue';
    return (entity instanceof Enemy);
  }).sort(function (a, b) {
    return Util.distance(player, a) - Util.distance(player, b);
  });

  badGuys[0].color = 'purple';

  for (var i = 0; i < badGuys.length; i+=1) {
    var badGuy = badGuys[i];

    for (var j = 0; j < badGuys.length; j++) {
      var otherBadGuy = badGuys[j];
        var otherBadGuyNextPos = {
          x: otherBadGuy.x + otherBadGuy.velocity.x * MAX_AHEAD,
          y: otherBadGuy.y + otherBadGuy.velocity.y * MAX_AHEAD
        };

        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.arc(otherBadGuyNextPos.x, otherBadGuyNextPos.y, 20, 0, Math.PI * 2);
        ctx.globalAlpha = 1;
        ctx.fill();
        ctx.restore();

      if (badGuy !== otherBadGuy) {

        var distance =  Util.distance(badGuy, otherBadGuy);

        var shouldSlowDown = distance <= 60 ||
          Util.distance(player, badGuy) > Util.distance(player, otherBadGuy);

        if (shouldSlowDown) {
          if (distance < 50) {
            badGuy.velocity.x = 0;
            badGuy.velocity.y = 0;
          } else {
            badGuy.velocity.x *= 0.5;
            badGuy.velocity.y *= 0.5;            
          }
          break;
        }
      }
    }
  }

};