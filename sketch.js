function setup() {
  createCanvas(1600,400);
  wall=createSprite(1410,200,60,400);
  wall.shapeColor="80,80,80"
  bullet1=createSprite(20,100,20,20);
  bullet1.shapeColor="white";
  bullet1.velocityX=8;
  //var weight,speed,thick,damage
}

function draw() {
  background(0,0,255);  
  weight=random(30,52);
  speed=random(223,321);
  thick=random(22,83);
  damage=0.5*weight*speed*speed/thick*thick*thick;
  if(bullet1.isTouching(wall)){
    bullet1.velocityX=0;
    if(damage>10){
      wall.shapeColor="red";
    }
    if(damage<10){
      wall.shapeColor="green";
    }
  }
  drawSprites();
}