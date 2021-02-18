/********************************************************/
//
/********************************************************/
var ball = [];
var maxRadius = 50;
function setup() {
  createCanvas(400, 400);
  frameRate(10);

  for(i=0; i<100; i++) {
    //ball info
    ball[i] = {
      radius : 0,
      minRadius : 5,
      maxRadius : 50,
      r : 0,
      g : 0,
      b : 0,
      xPos : width/2,
      yPos : height/2,
      xVel : 0,
      yVel : 0,
      rangeVel : 10,
      //ball func
      initialise : function() {
        this.radius = round(random(this.minRadius, this.maxRadius));

        this.xPos = round(random(this.radius, width-this.radius));
        this.yPos = round(random(this.radius, height-this.radius));
        this.xVel = round(random(-this.rangeVel, this.rangeVel));
        this.yVel = round(random(-this.rangeVel, this.rangeVel));

        this.r = round(random(0, 255));
        this.g = round(random(0, 255));
        this.b = round(random(0, 255));
      },
      display : function() {
        fill(this.r, this.g, this.b);
        stroke(0, 0, 0);
        strokeWeight(0);
        ellipse(this.xPos, this.yPos, this.radius*2);
      },
      move : function() {
        this.xPos += this.xVel;
        this.yPos += this.yVel;
      },
      bounceX : function() {
        if(this.xPos <= this.radius) {
          this.xVel *= -1;
          this.xPos = this.radius;
        }
        if(this.xPos >= width-this.radius) {
          this.xVel *= -1;
          this.xPos = width-this.radius;
        }
      },
      bounceY : function() {
         if(this.yPos <= this.radius) {
          this.yVel *= -1;
          this.yPos = this.radius;
        }
        if(this.yPos >= height-this.radius) {
          this.yVel *= -1;
          this.yPos = height-this.radius;
        }
      }
    };
    ball[i].initialise();
  }
}

function draw() {
  background("#000000");
  //ball
/********************************************************/
  for(i=0; i<ball.length; i++) {
    ball[i].bounceX();
    ball[i].bounceY();
    ball[i].display();
    ball[i].move();
  }
/********************************************************/
}
