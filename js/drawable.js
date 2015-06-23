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