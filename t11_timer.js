/********************************************************/
//
/********************************************************/
colr = "#FF0000"
upTimer = 30000;
downTimer = 30000;
function setup() {
  createCanvas(400, 400);
  setTimeout(backColourBlue, upTimer);
}

function draw() {
  background(colr);
  
  
}

function backColourBlue() {
  colr = ("#00FF00")
  startDownTimer();
}
function startDownTimer() {
  setTimeout(backColourGreen, downTimer);
}
function backColourGreen() {
  colr = ("#0000FF");
}