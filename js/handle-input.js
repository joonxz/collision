// updates variables according to whats pressed
var handleInput = function () {
  gpActive();
  player.x += (joystickX * 2);
  player.y -= (joystickY * 2);
};