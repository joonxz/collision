canvas.addEventListener("mousedown", function (e) {

    for (var i = 0; i < spots.length; i++) {
      // applied the pythagorean theorem
      var dx = spots[i].x - mousePos.x;
      var dy = spots[i].y - mousePos.y;
      var distSquared = dx * dx + dy * dy;
      var radiusSquared = spots[i].radius * spots[i].radius;

      var drag = function () {
        
      }

      if (distSquared < radiusSquared) {
        // spots[i].drag();
        console.log("im in there");
      } 

    };
    
  }); 