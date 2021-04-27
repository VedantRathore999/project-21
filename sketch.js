var canvas;
var block1,block2,block3,block4;
var ball, edges;
var mu;

function preload(){
    // load sound here
    mu=loadSound("music.mp3")
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(500,580,200,30);
    block3.shapeColor = "cyan";

    block4 = createSprite(705,580,200,30);
    block4.shapeColor = "pink";
    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
     ball.velocityX=-2
     ball.velocityY=6.22
    
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    


    if(block2.isTouching(ball)&&ball.bounceOff(block2)){
        ball.shapeColor = "orange";
        //write code to set velocityX and velocityY of ball as 0
        ball.velocityX=0
        ball.velocityY=0
        mu.stop();
        //write code to stop music
        
    }

    //write code to bounce off ball from the block3


    //write code to bounce off ball from the block4

    drawSprites();
    if(ball.isTouching(block1) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        mu.play();
        
    }
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "cyan";
        mu.play();
        
    }
    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "cyan";
        mu.play();}
}
