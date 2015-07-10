// Game logic will go in the simulation function
var simulation = function (time) {
  player.color = 'red';

  for (var i = 0; i < entities.length; i++) {
    entities[i].update(time);
  }

  for (var i = 0; i < entities.length; i++) {
    var entity = entities[i];

    if (entity instanceof Enemy) { 
      // refactor to OOP to have a collided state and normal
      if (player.collidesWith(entity)) {
        player.color = 'orange';
      }
    }
  }

  // ai();
};