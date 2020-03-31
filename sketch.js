
var r = 0;
var g = 0;
var b=255;

function setup(){
  createCanvas(1200,400);
}


function draw(){

  r=map(mouseX,0,1200,255,0);
  g=map(mouseX,0,1200,0,255);
  b=map(mouseX,0,1200,0,0);

  background(r,g,b);

  fill("white");
  ellipse(mouseX, 200, 40, 40);
}