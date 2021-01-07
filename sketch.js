var fixedRectangle,movingRectangle;


function setup() {
  createCanvas(1200,800);
  fixedRectangle=createSprite(600, 400, 50, 80);
  fixedRectangle.shapeColor="cyan";
  fixedRectangle.debug=true;

  movingRectangle=createSprite(800,400,80,30);
  movingRectangle.shapeColor="cyan";
  movingRectangle.debug=true;

  
}

function draw() {
  background(0,0,0); 

  movingRectangle.x=World.mouseX;
  movingRectangle.y=World.mouseY;

  console.log(movingRectangle.x-fixedRectangle.x);


  if(movingRectangle.x-fixedRectangle.x<fixedRectangle.width/2+movingRectangle.width/2 && 
   fixedRectangle.x-movingRectangle.x<fixedRectangle.width/2+movingRectangle.width/2 &&
   movingRectangle.y-fixedRectangle.y<fixedRectangle.height/2+movingRectangle.height/2 && 
   fixedRectangle.y-movingRectangle.y<fixedRectangle.height/2+movingRectangle.height/2){

   fixedRectangle.shapeColor="magenta";
   movingRectangle.shapeColor="magenta"; 
  }

  else {
    fixedRectangle.shapeColor="cyan";
    movingRectangle.shapeColor="cyan"; 
  }
  drawSprites();
}