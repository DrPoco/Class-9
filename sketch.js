var dog



function setup() {
  createCanvas(1000,400);
  dog=createSprite(10,10,25,32)
}

function draw() 
{
  background("blue");

  if(keyDown("right")){
    dog.x=dog.x+10

  }

  
  if(keyDown("left")){
    dog.x=dog.x-10

  }

  if(keyDown("up")){
    dog.y=dog.y-10

  }

  if(keyDown("down")){
    dog.y=dog.y+10

  }

  drawSprites()


}




