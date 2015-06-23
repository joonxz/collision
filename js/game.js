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