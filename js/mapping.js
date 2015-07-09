// mapping
document.onkeydown = function(e) {
    console.log(e.keyCode);
  switch (e.keyCode) {
    case 37:
        // left
        inputState.joystick.x = -1;
        break;
    case 38:
        // up
        inputState.joystick.y = 1;
        break;
    case 39:
        // right
        inputState.joystick.x = 1;
        break;
    case 40:
        // down
        inputState.joystick.y = -1;
        break;
    case 32:
        // spacebar
        inputState.blastButton = true;
        break;
  }
};

document.onkeyup = function(e) {
  switch (e.keyCode) {
    case 37:
        inputState.joystick.x = 0;
        break;
    case 38:
        inputState.joystick.y = 0;
        break;
    case 39:
        inputState.joystick.x = 0;
        break;
    case 40:
        inputState.joystick.y = 0;
        break;
    case 32:
        // spacebar
        inputState.blastButton = false;
        break;
  }
};