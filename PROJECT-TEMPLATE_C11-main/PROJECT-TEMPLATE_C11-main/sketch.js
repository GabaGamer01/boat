var ship,shipImg;

var sea,seaImg;
function preload(){
seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200,200,200);
  sea.addImage("see,the sea",seaImg);
  sea.scale=0.25
  sea.velocityX=1;
 
  ship=createSprite(250,200,200,200);
  ship.addAnimation("boat",shipImg);
  ship.scale = 0.25 
}

function draw() {
  background("blue");
  
    drawSprites();

 
}
