// updates variables according to whats pressed
var handleInput = function () {
  gpActive();

  player.x += (inputState.joystick.x * 2);
  player.y -= (inputState.joystick.y * 2);

  
  // this checks if button is pressed then adds entity to array.
  // This is per frame. If in the current frame the button is pressed and the 
  // previous frame was not, value: false, it will add the entity. But as the  
  // button stays pressed the current frame becomes the previous frame  
  // causing both frame to render the value: 'True' or pressed. Which will
  // not add the entity.
  if (prevInputState.blastButton == false && inputState.blastButton == true) {
  	entities.push(new Shockwave(player.x, player.y));
  }

  // This sets current state to the previous state so that the buttons can stay
  // 'True' or 'False' on a frame basis
  prevInputState.joystick.x = inputState.joystick.x;
  prevInputState.joystick.y = inputState.joystick.y;
  prevInputState.blastButton = inputState.blastButton;
};