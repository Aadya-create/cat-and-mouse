var cat,mouse,catImg,mouseImg,bg,cat1,mouse1
function preload() {
    //load the images here
    catImg = loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg = loadAnimation("images/mouse2.png","images/mouse3.png");
    bg = loadImage("images/garden.png");
    cat1 = loadAnimation("images/cat1.png");
    mouse1 = loadAnimation("images/mouse1.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600)
    cat.addAnimation("catSleeping",cat1);
    cat.scale = 0.2;

    mouse = createSprite(200,600)
    mouse.addAnimation("mouseStanding",mouse1)
    mouse.scale = 0.15;
}

function draw() {

    background(bg);
    if(cat.x-mouse.x<cat.width/2-mouse.width/2){
        cat.addAnimation("catSleeping",cat1)
        cat.changeAnimation("catSleeping")

        mouse.addAnimation("mouseStanding",mouse1)
        mouse.changeAnimation("mouseStanding")
        cat.velocityX = 0;
        cat.x = 300;
        cat.scale = 0.2;
        mouse.scale = 0.15;
    }
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
   if(keyCode === LEFT_ARROW){
       mouse.addAnimation("mouseTeasing",mouseImg);
       mouse.changeAnimation("mouseTeasing")
       mouse.frameDelay = 25;
       cat.addAnimation("catRunning",catImg);
       cat.changeAnimation("catRunning")
       cat.velocityX = -5;
   }
   
  //For moving and changing animation write code here


}
