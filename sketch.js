var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);

  bullet = createSprite(50,200,50,weight);
    bullet.velocityX = speed;
    bullet.shapeColor = "white";

  wall = createSprite(1200,200,thickness,height/2);
    thickness = random(22,83);
    wall.shapeColor = color(80,80,80);
}

function draw() {
  background("lightgrey");

  if(bullet.isTouching(wall)) {
    bullet.velocityX = 0;
    bullet.collide(wall);

    var damage = 0.5*weight*speed*speed/thickness*thickness*thickness;

    if(damage>10) {
      bullet.shapeColor = color(255,0,0);
    }
    if(damage<10) {
      bullet.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}