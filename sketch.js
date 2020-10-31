var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage,ground
var FoodGroup, obstaclesGroup
var score
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 360);
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = 4;
  ground.x = ground.width/2;
  console.log(ground.x)
  
   
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }

  obstaclesGroup = createGroup();
  FoodGroup = createGroup();
}


function draw() {
  
  background(180);
  
  
  CreateObstacles();
  CreateFoodGroup();
  drawSprites();
  
   score = score + Math.round(getFrameRate()/60);
}

function CreateObstacles()
{
  if (frameCount % 60 === 0){
   var obstacle = createSprite(600,325,10,40);
   obstacle.velocityX = -(6 + 1/100);
   
    obstacle.addImage(obstaceImage );
           
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
   
    obstaclesGroup.add(obstacle);
 }
}

function CreateFoodGroup(){
  if (frameCount % 60 === 0){
   var banana = createSprite(600,100,10,40);
   banana.velocityX = -(6 + 1/100);
   
    banana.addImage( bananaImage );
           
    banana.scale = 0.1;
    banana.lifetime = 300;
   
    FoodGroup.add(banana);
 }
}






