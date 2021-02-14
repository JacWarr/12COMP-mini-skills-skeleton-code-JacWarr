/********************************************************/
//
/********************************************************/
var xPos = 200;
var yPos = 200;
var xVel = 5;
var yVel = 2.5;
var radius = 25;
var diameter = radius*2;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100, 200, 50);
  ellipse(xPos, yPos, diameter);

  if(xPos >= width-radius || xPos <= radius) {
    xVel *= -1;
  }
  if(yPos >= height-radius || yPos <= radius) {
    yVel *= -1;
  }

  xPos += xVel;
  yPos += yVel;

}