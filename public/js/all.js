var MG = MG || {};

(function () {
  "use strict";

  /**
   * The animation loop. Calls the requestAnimationFrame shim to
   * optimize the game loop and draws all game objects. This
   * function must be a gobal function and cannot be within an
   * object.
   */
  function animate() {
    requestAnimFrame( animate );
    game.background.draw();
  }
  /**
   * requestAnim shim layer by Paul Irish
   * Finds the first API that works to optimize the animation loop,
   * otherwise defaults to setTimeout().
   */
  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame   ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(/* function */ callback, /* DOMElement */ element){
          window.setTimeout(callback, 1000 / 60);
        };
  })();
})();
var MG = MG || {};

(function () {
  "use strict";

  var Background = function () {
    this.speed = 1;
    this.draw = function () {
      // pan background
      this.y += this.speed;
      this.context.drawImage(imageRepository.background, this.x, this.y);

      this.context.drawImage(imageRepository.background, this.x, this.y - this.canvasHeight);

      if (this.y >= this.canvasHeight) {
        this.y=0;
      }
    };
  }();

  MG.Background.prototype = new Drawable();


})();
var MG = MG || {};

/* Drawable object for all object in the game - ABSTRACT OBJECT */
(function () {
  "use strict";

  var Drawable = function () {
    this.init = function (x, y) {
      this.x = x;
      this.y = y;
    };

    this.speed = 0;
    this.canvasWidth = 0;
    this.canvasHeight = 0;

    this.draw = function () {
      // body...
    };

  }();


  MG.Drawable = Drawable;

})();
// This will hold all game objects

(function () {
  "use strict";

  var Game = function () {
    this.init = function () {
      this.bgCanvas = document.getElementById('background');

      if (this.bgCanvas.getContext) {
        this.bgContext = this.bgCanvas.getContext('2d');

        MG.Background.prototype.context = this.bgContext;
        MG.Background.prototype.canvasWidth = this.bgCanvas.width;
        MG.Background.prototype.canvasHeight = this.bgCanvas.height;

        this.background = new MG.Background();
        this.background.init(0,0);
        
        return true;
      } else {
        return  false;
      }
    }();

    this.start = function () {
      animate();
    };
  }();

})();
var MG = MG || {};

(function () {
	"use strict";

	// Load all images here within this image repository
	var imageRepository = function () {
		// Define images
		this.background = new Image();
		// Set images src
		this.background.src = "imgs/bg.png";
	}();

	// expose imageRespository
	MG.imageRepository = imageRepository;
})();

(function () {
  "use strict";

  // declare canvas
  var canvas = document.getElementById('my-canvas');
  var ctx = canvas.getContext("2d");


})();


// canvas.addEventListener("mousedown", function (e) {

//   for (var i = 0; i < spots.length; i++) {
//     // applied the pythagorean theorem
//     var dx = spots[i].x - mousePos.x;
//     var dy = spots[i].y - mousePos.y;
//     var distSquared = dx * dx + dy * dy;
//     var radiusSquared = spots[i].radius * spots[i].radius;

//     var drag = function () {
      
//     }

//     if (distSquared < radiusSquared) {
//       // spots[i].drag();
//       console.log("im in there");
//     } 

//   };
  
// }); 
(function () {
  "use strict";
  /**
   * Initialize the Game and starts it.
   */
  var game = new Game();
  function init() {
    if(game.init())
      game.start();
  }
  
})();