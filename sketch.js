function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}
var divisions = [];
var plinko = [];
var particle = [];
var divisionHeight = 300;
for (var k = 0; k<=width; k = k+80){
  division.push(new division(k, height-divisionHeight/2, 10, divisionHeight));
}
for (var j = 40; j <=width; j=j=50)
{
  plinko.push(new plinko(j,75));
}
for (var j = 15; j <=width-10; j=j+50)
{
  plinko.push(new plinko(j,175 ))
}
function draw() {
  background(255,255,255);  
  drawSprites();
}