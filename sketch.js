var fixedRect, movingRect;
var o1,o2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  o1 = createSprite(500,600,50,50);
  o2 = createSprite(500,50,50,50);
  o1.shapeColor = "green";
  o2.shapeColor = "red";
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect,fixedRect);

  o1.x=mouseX;
  o1.y=mouseY;

  if(isTouching(o1,o2)){
    o2.shapeColor = "green";
    o1.shapeColor = "red";
    o1.debug = true;
    o2.debug = true;
  }else{
    o2.shapeColor = "red";
    o1.shapeColor = "green";
    o1.debug = false;
    o2.debug = false;
  }

  drawSprites();
}

