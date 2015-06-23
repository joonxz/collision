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