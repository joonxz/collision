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