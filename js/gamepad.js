// gets available gamepad - in this case XBOX 360 controller
var gpActive = function () {
var gp = navigator.getGamepads()[0];

  if (gp) {
    // Gamepad Axes mapping including deadzone threshold
    inputState.joystick.x = Math.abs(gp.axes[0]) > 0.1 ? gp.axes[0] : 0.0 ;
    inputState.joystick.y = Math.abs(gp.axes[1]) > 0.1 ? gp.axes[1] * -1 : 0.0;
  }

};