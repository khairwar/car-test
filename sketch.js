var car,wall
var speed,weight



function setup() {
  createCanvas(1600,800);
  speed=random(55,90)
  weight=random(400,1500)
  car=createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  fill(80,80,80)
  wall=createSprite(1500,200,60,height/2)
}

function draw() {
  background(255,255,255);  
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180){
      car.shapeColor=color(255,0,0);
      textSize(200)
      text ("lethel",800,400)
    }
    if(deformation<180 && deformation>80){
      car.shapecolor=color(230,230,0);
      textSize(200)
      text("avrage",800,400)
    }
    if(deformation<80){
      car.shapeColor=color(0,255,0)
      textSize(200)
      text("safe",800,400)
    }
  }
  drawSprites();
}