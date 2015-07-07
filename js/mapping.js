// mapping
document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37:
        // left
        joystickX = -1;
        break;
    case 38:
        // up
        joystickY = 1;
        break;
    case 39:
        // right
        joystickX = 1;
        break;
    case 40:
        // down
        joystickY = -1;
        break;
  }
};

document.onkeyup = function(e) {
  switch (e.keyCode) {
    case 37:
        joystickX = 0;
        break;
    case 38:
        joystickY = 0;
        break;
    case 39:
        joystickX = 0;
        break;
    case 40:
        joystickY = 0;
        break;
  }
};