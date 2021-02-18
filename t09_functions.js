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
  diameter : 20,
  display : function() {
    ellipse(this.xPos, this.yPos, this.diameter);
  },
  moving : function() {
    this.xPos += this.xVel;
    this.yPos += this.yVel;
  },
  xBound: function() {
    if(this.xPos >= width-this.radius || this.xPos <= this.radius) {
      this.xVel *= -1;
    }
  },
  yBound: function() {
    if(this.yPos >= height-this.radius || this.yPos <= this.radius) {
      this.yVel *= -1;
    }
  },
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

  object1.xVel = bound(object1.xPos, object1.radius, object1.xVel);
  object1.yVel = bound(object1.yPos, object1.radius, object1.yVel);

  move();
/********************************************************/
  //object2
/********************************************************/
  object2.moving();
  object2.xBound();
  object2.yBound();
  object2.display();

/********************************************************/
}

function move() {
  object1.xPos += object1.xVel;
  object1.yPos += object1.yVel;
}
function bound(position, halfWidth, velocity) {
  if(position >= width-halfWidth || position <= halfWidth) {
    velocity *= -1;
  }
  return(velocity);
}