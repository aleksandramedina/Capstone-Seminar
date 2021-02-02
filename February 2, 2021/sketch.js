var socket;
let colorPicker;
var colorvalue;


function setup() {
  createCanvas(600, 400);
  background(51);


  //eraser
  checkbox = createCheckbox('Erase', false);
  checkbox.position(60, 1000);

  //slider for brush size
  slider = createSlider(5, 100, 30, 5);
  slider.position(200, 1000);

  //color picker
  colorPicker = createColorPicker(color('yellow'));
  colorPicker.position(0, 1000);

  socket = io.connect('http://localhost:3000')
  socket.on('mouse', newDrawing);

}

function newDrawing(data){
  noStroke();
  fill(data.color);
  ellipse(data.x, data.y, data.slider, data.slider);
}

// !!!!!!!
// the part where the data from one user is imported to the other user's machine


function mouseDragged(){
  // console.log('Sending: ' + mouseX + ',' + mouseY + ',' + color)

  var data = {
    x: mouseX,
    y: mouseY,
    // color: colorPicker.value(),
    color: colorvalue,
    slider: slider.value()
  }

socket.emit('mouse', data);

  noStroke();

  if (checkbox.checked()){
    fill(51);
    colorvalue = 51;

  } else {
    fill(220);
    fill(colorPicker.value());
    colorvalue = colorPicker.value();
  }

  ellipse(mouseX, mouseY, slider.value(), slider.value());
}

function draw(){

}
