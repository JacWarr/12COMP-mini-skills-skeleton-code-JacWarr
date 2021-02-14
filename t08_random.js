/********************************************************/
//
/********************************************************/
var object1 = {
  xPos : 0,
  yPos : 0,
  xVel : 5,
  yVel : 2.5,
  radius : 25,
  diameter : 50
};

var object2 = {
  xPos : 0,
  yPos : 0,
  xVel : 2,
  yVel : 4,
  radius : 10,
  diameter : 20
};

function setup() {
  createCanvas(400, 400);

  object1.xPos = random(50, 350);
  object1.yPos = random(50, 350);

  object2.xPos = random(50, 350);
  object2.yPos = random(50, 350);
}

function draw() {
  background(100, 200, 50);
  //object1
/********************************************************/
  ellipse(object1.xPos, object1.yPos, object1.diameter);

  if(object1.xPos >= width-object1.radius || object1.xPos <= object1.radius) {
    object1.xVel *= -1;
  }
  if(object1.yPos >= height-object1.radius || object1.yPos <= object1.radius) {
    object1.yVel *= -1;
  }

  object1.xPos += object1.xVel;
  object1.yPos += object1.yVel;
/********************************************************/
  //object2
/********************************************************/
  ellipse(object2.xPos, object2.yPos, object2.diameter);

  if(object2.xPos >= width-object2.radius || object2.xPos <= object2.radius) {
    object2.xVel *= -1;
  }
  if(object2.yPos >= height-object2.radius || object2.yPos <= object2.radius) {
    object2.yVel *= -1;
  }

  object2.xPos += object2.xVel;
  object2.yPos += object2.yVel;
/********************************************************/
}