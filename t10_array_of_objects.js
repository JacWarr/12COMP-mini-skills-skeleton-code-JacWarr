/********************************************************/
//
/********************************************************/
var ball = [];
var maxRadius = 50;
function setup() {
  createCanvas(400, 400);

  for(i=0; i<100; i++) {
    //ball info
    ball[i] = {
      radius : 50,
      r : round(random(0, 255)),
      g : round(random(0, 255)),
      b : round(random(0, 255)),
      xPos : round(random(maxRadius, width-maxRadius)),
      yPos : round(random(maxRadius, height-maxRadius)),
      xVel : round(random(-10, 10)),
      yVel : round(random(-10, 10)),
    
      //ball func
      display : function() {
        fill(this.r, this.g, this.b);
        strokeWeight(0);
        console.log(this.xPos);
        ellipse(this.xPos, this.yPos, this.radius);
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
