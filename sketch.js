

var trex ,trex_running;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
ground1=loadAnimation("ground2.png");
cloud1=loadImage("cloud.png");
}

function setup(){
  createCanvas(600,200)

  //create a trex sprite
 trex=createSprite(50,165,20,50);
 trex.scale=0.5;
 trex.addAnimation("rex",trex_running); 
 ground=createSprite(200,180,400,10);
 ground.addAnimation("floor",ground1);
 //invisible ground
 invisibleground=createSprite(200,190,400,10);
 invisibleground.visible=false;
}

function draw(){
  background("skyblue")
  ground.velocityX=-2;
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  if(keyDown("space")&& trex.y>=100){
    trex.velocityY=-5;
  }
  trex.velocityY=trex.velocityY+0.5;
trex.collide(invisibleground);

spawnclouds();
  drawSprites();

}
function spawnclouds(){
  if(frameCount%60==0){
    cloud=createSprite(600,100,40,10);
    cloud.scale=0.5;
    cloud.addImage(cloud1);
    cloud.velocityX=-3;
    cloud.y=Math.round(random(10,60))
  }
  
  
}


