/********************************************************/
//
/********************************************************/
var pastMouseX;
var pastMouseY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(100, 100, 100, 5);
  stroke(0, 0, 0, 200);
  strokeWeight(25);
  line(mouseX, mouseY, pastMouseX, pastMouseY);
  
  pastMouseX = mouseX;
  pastMouseY = mouseY;
}