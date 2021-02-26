var socket;
var colorPicker;
var colorvalue;
var strokeValue;
var saturationcolor;
let stages = [0, 1, 2, 3, 4];
var xPoint;
var yPoint;
var ellipseHeight = 20;
var _instruction =0;
var interval = 5000;
var r;
var g;
var b;
var w = window.innerWidth;
var h = window.innerHeight;
var previousMillis = 0;
var xoff = 0.0;

function setup() {
  createCanvas(w,h);
  colorMode(HSB, 255);
  background (51);


randomgenerator();
  //eraser
  checkbox = createCheckbox('Erase', false);
  checkbox.position(120, h-25);

  //slider for brush size
  slider = createSlider(5, 100, 30, 5);
  slider.position(230, h-25);

  //color picker
  colorPicker = createColorPicker(color('yellow'));
  colorPicker.position(30, h-30);

  // socket = io.connect('http://2.tcp.ngrok.io:12749')
  socket = io.connect('http://localhost:3000')
  socket.on('mouse', newDrawing);

}


function newDrawing(data){

  noStroke();
  fill(data.color);
  // stroke(data.stroke);

  if (data.instruction==0){
    ellipseHeight = data.slider;
    xPoint = data.x;
    yPoint = data.y;
    ellipse(xPoint, yPoint, data.slider, ellipseHeight);
  }
  else if (data.instruction==1){
    ellipseHeight = 1;
    xPoint = data.x;
    yPoint = data.y;
    ellipse(xPoint, yPoint, data.slider, ellipseHeight);
  }
  else if (data.instruction==2){
    ellipseHeight = data.slider;
    xPoint = data.y;
    yPoint = data.x;
    ellipse(xPoint, yPoint, data.slider, ellipseHeight);
  }else if (data.instruction==3){
    ellipseHeight = data.slider;
    xPoint = data.x;
    yPoint = data.y;
    ellipse(xPoint, yPoint, data.slider, ellipseHeight);
  }else if (data.instruction ==4){
    ellipseHeight = data.slider;
    xPoint = data.x;
    yPoint = data.y;
    rect(xPoint, yPoint, data.slider, ellipseHeight);
  }

  // console.log(millis());
  console.log(ellipseHeight);
  console.log(colorvalue);


}

// !!!!!!!
// the part where the data from one user is imported to the other user's machine

function mouseDragged(){

  var data = {
    x: mouseX,
    y: mouseY,
    color: colorvalue,
    slider: slider.value(),
    // stroke: strokeValue,
    instruction: _instruction
  }

socket.emit('mouse', data);

//Beginning of instructions
//Instruction 0: basic setting without any interruptions
//Instruction 1: ellipse height is set to 1 so the stroke becomes a inline
//Instruction 2: x and y axis are swapped

 if (data.instruction ==0){
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
   ellipseHeight = slider.value();

   }

  else if (data.instruction ==1){
     noStroke();

     if (checkbox.checked()){
       fill(51);
       colorvalue = 51;

     } else {
       fill(220);
       fill(colorPicker.value());
       colorvalue = colorPicker.value();
     }

     ellipseHeight=1;

     ellipse(mouseX, mouseY, slider.value(), ellipseHeight);

   }  else if (data.instruction ==2){
          noStroke();

          if (checkbox.checked()){
            fill(51);
            colorvalue = 51;

          } else {
            fill(220);
            fill(colorPicker.value());
            colorvalue = colorPicker.value();
          }


          ellipse(mouseY, mouseX, slider.value(), slider.value());

        } else if (data.instruction ==3){

          noStroke();

          if (checkbox.checked()){
            fill(51);
            colorvalue = 51;

          } else {
            fill('#ffffff');
            colorvalue = (random (225));
          }

          ellipse(mouseX, mouseY, slider.value(), slider.value());
          ellipseHeight = slider.value();


        }  else if (data.instruction==4){
          noStroke();

          if (checkbox.checked()){
            fill(51);
            colorvalue = 51;

          } else {
            fill(220);
            fill(colorPicker.value());
            colorvalue = colorPicker.value();
          }


          rect(mouseX, mouseY, slider.value(), slider.value());
          ellipseHeight = slider.value();


        }else {
       console.log("Other instruction found");
     }

 }


function randomgenerator(){
  _instruction = random (stages);
  console.log("Instruction: "+ _instruction);
}

function draw(){
  fill('rgba(230,230,230,0.7)');
  rect(0, h-45, w, 45);
  // blockScroll();

}


// The different things I can measure and change

//Idle user
// if ((millis() - previousMillis) >= interval && pmouseX == mouseX){
//   background(255);
//   previousMillis = millis();
// }


// if the mouse is on the very bottom, ellipse loses saturation
// if (mouseY >=380){
// saturationcolor = saturation(colorPicker.value());
// colorvalue = saturationcolor;
//
// }else {
// colorvalue = colorPicker.value();
// }

// If the mouse is in the far right side, the stroke changes to black
// if (mouseX >=580){
//   stroke(46);
//   strokeValue = 46;
// } else {
//   strokeValue = colorvalue;
// }

//noise
//
// xoff = xoff + 0.03;
// let n = noise(xoff) * width;
// line(n, 0, n, height);
