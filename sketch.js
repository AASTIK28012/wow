var ball,img,paddle,paddle1,ball,ball1,edges;
function preload() {
  ball=loadImage("ball.png");
  paddle=loadImage("paddle.png");
  /* preload your images here of the ball and the paddle */
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  paddle1=createSprite(380,200,20,20);
  ball1=createSprite(200,200,20,20);
  /* assign the images to the sprites */
  paddle1.addImage(paddle);
  ball1.addImage(ball);
  /* give the ball an initial velocity of 9 in the X direction */
  ball1.velocityX=9;
  paddle1.velocityY=random(1,7);
  

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edges=createEdgeSprites();
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball1.bounceOff(edges[0]);
  ball1.bounceOff(edges[2]);
  ball1.bounceOff(edges[3]);
  

  /* Allow the ball to bounceoff from the paddle */
  ball1.bounceOff(paddle1);
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  paddle1.bounceOff(edges[2]);
  paddle1.bounceOff(edges[3]);
  
  if(keyDown(UP_ARROW))
  
    
  {
     /* what should happen when you press the UP Arrow Key */
    
paddle1.y=paddle1.y-12  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
    paddle1.y=paddle1.y+12
  }
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

