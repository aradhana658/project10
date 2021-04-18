var jake,path,jake_Img;
function preload(){
  //pre-load images
  jake_Img=loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
  pathImage=loadImage("path.png");
  
  
  
  
  
  
  
}

function setup(){
  createCanvas(600,600);
 
  
  
  //create a path sprite
  path= createSprite(300,300,600,100);
  path.addImage("path",pathImage);
  path.y = path.width /6;
  path.velocityY= -4;
  
   
  //create a jake sprites
  
  jake=createSprite(300,300,200,100);
  jake.addAnimation("running",jake_Img);
  jake.scale=1.2;
  
  //creating invisible ground1
  invisibleGround1 = createSprite(120,300,10,600);
  invisibleGround1.visible = false;
  
  //creating invisible ground2
  invisibleGround2 = createSprite(490,300,10,600);
 invisibleGround2.visible = false;
  
  
  
  
}

function draw() {
  background(0);
  
  jake.x=World.mouseX
   jake.collide(invisibleGround1);
  jake.collide(invisibleGround2);
  
  //code to reset background
 if(path.y<0){ path.y=height/2; }

   
drawSprites();
}