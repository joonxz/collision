
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var canvasWidth = canvas.clientWidth;
var canvasHeight = canvas.clientHeight;

// var inputState.joystick.x = 0;
// var inputState.joystick.y = 0;

var prevInputState = {
  joystick: {x: 0.0, y: 0.0},

  // best practice -- call buttons for what they do
	blastButton: false
};

var inputState = {
  joystick: {x: 0.0, y: 0.0},
  blastButton: false
};
