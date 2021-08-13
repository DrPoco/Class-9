
function setup() {
  createCanvas(600,600);
  var player=createSprite=(250,250,50,50)
   player.shapeColor="orange"
 
  
}

function draw() {

 background('black')



  if(keyIsDown(DOWN_ARROW)){
    background('blue')
  }
 
 if(keyIsDown(UP_ARROW)){
 background('green')


 }
 

 if(keyIsDown(RIGHT_ARROW)){
   background('yellow')



 }

 if(keyIsDown(LEFT_ARROW)){
   background('red')



 }
  

drawSprites()

}




