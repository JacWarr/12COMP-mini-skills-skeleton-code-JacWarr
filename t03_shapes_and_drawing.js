/********************************************************/
//
/********************************************************/
function setup() {
  createCanvas(400, 400);
  frameRate(60);
  
}

function draw() {
  background("#54BBEF");
  
  fill("#FFFFFF");
  rect(10, 10, 100, 150);
  line(120, 10, 200, 50);
  fill("#33FB78");
  ellipse(85, 240, 110, 70);
  fill("#FF22AB")
  stroke("#BE4721");
  strokeWeight(12);
  rect(40, 90, 110, 60);
  stroke("#000000");
  strokeWeight(2);
  fill(200, 100, 50, 200);
  rect(40, 200, 170, 70);
}