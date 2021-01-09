var gamestate = 0;
john.visible = true;
var john,introscreen,beachsprite,beach_background,johnimage,portal_1,underwater,swimming,swimmingleft,netsprite,netimage,netrightimage;
var turtle_animation, turtlesprite, cruiseship, cruiseimage,cruise2image,cruise3image,trash,trashimage,shipgroup,rock,rock2,rock3,rockimage;
var coin,coinimage,turtlehit

var sea_urchin,sea_urchin_img,sea_urchin2,loadSound,cointune,gamestate0_5,turtlepic,turtlepicsprite,winimg,playtune,trashgroup



var score=0


function preload()
{

  turtlehit = loadSound('images/obstacle.mp3')
  cointune = loadSound('images/coin.mp3')
  playtune = loadSound('images/playing.mp3')
  gethit = loadSound('images/obstacle.mp3')
  winimg = loadImage('images/win.jpg')
  introscreen = loadImage("images/introturtle.jpg");
//cruiseship image
cruiseimage = loadImage("images/cruiseship.png");	
cruise2image = loadImage("images/cruiseship2.png");
cruise3image = loadImage("images/cruiseship3.png");		 
trashimage = loadImage("images/garbage.png");
coinimage = loadImage("images/timecoin.png")
beachsprite = loadImage("images/beachbackground.jpg");
johnimage = loadAnimation("images/scubaboybeach.png");
sea_urchin_img = loadImage("images/seaurchin.png")
netimage = loadImage("images/net_left.png")
netrightimage = loadImage("images/net_right.png")
swimming = loadAnimation("images/scuba1.png","images/scuba2.png","images/scuba3.png","images/scuba4.png","images/scuba5.png" )
swimmingleft = loadAnimation("images/flipscuba1.png","images/flipscuba2.png","images/flipscuba3.png","images/flipscuba4.png","images/flipscuba5.png" )
rockimage = loadImage("images/rock.png");
//turtle animation
turtle_animation = loadAnimation("images/turtle1.png", "images/turtle2.png", "images/turtle3.png", "images/turtle4.png")

underwater = loadImage("images/underwater.jpg")
turtlepic = loadImage("images/turtlepic.jpg")


}

function setup() {
	createCanvas(displayWidth,displayHeight);
	background(200);

  beach_background = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
  beach_background.addImage(beachsprite)
  beach_background.scale = 1.2
  beach_background.visible = false; 
  john = createSprite(700,500,50,120); 
  john.addAnimation("standing",johnimage)
  john.addAnimation("swimming",swimming)
  john.addAnimation("swimmingleft",swimmingleft)

  trashgroup = new Group();

  //make the ship group
// shipgroup = new Group();
 
  //turtle sprite
  turtlesprite = createSprite(displayWidth,500,70,40);
  turtlesprite.addAnimation("turtle_animation",turtle_animation)

  //turtle pic sprite
  turtlepicsprite = createSprite(displayWidth/1.15,displayHeight/5,30,30);
  turtlepicsprite.addImage(turtlepic)
  turtlepicsprite.visible = false;

  //create the net sprite to assign the net variable to it. 
  netsprite = createSprite(john.x+30,john.y,50,20);
  netsprite.addImage(netimage)

  rock = createSprite(displayWidth/3,displayHeight/1.2,20,150);
  rock.addImage(rockimage)
  rock.scale = 2.5
  rock.visible = false;

  rock2 = createSprite(displayWidth/1.2,displayHeight/1.2,30,100);
  rock2.addImage(rockimage)
  rock2.scale = 2
  rock2.visible = false;

  rock3 = createSprite(displayWidth/1.7,displayHeight/1.2,30,170);
  rock3.addImage(rockimage)
  rock3.scale = 4
  rock3.visible = false;

  coin = createSprite(displayWidth/2.3,displayHeight - 100,50,50)
  coin.addImage(coinimage)
  coin.scale = 0.2
  coin.visible = false;

  john.scale = 0.35
  john.visible=false;
  netsprite.visible = false;
  portal_1 = createSprite(displayWidth/2 + displayWidth/3, displayHeight-400,30,200)
  portal_1.visible = false;
  turtlesprite.visible = false;
  
  sea_urchin = createSprite(displayWidth/8,displayHeight-60,20,20);
  sea_urchin.addImage(sea_urchin_img)
  sea_urchin.scale = 0.8
  sea_urchin.visible = false;

  sea_urchin2 = createSprite(displayWidth/1.5,displayHeight/2,10,10);
  sea_urchin2.addImage(sea_urchin_img)
  sea_urchin2.scale = 0.5
  sea_urchin2.visible = false;


	//Create the Bodies Here.
}


function draw() 
{
  rectMode(CENTER);
  background(rgb(13,219,216));
 
  //call the gamestate0 function file to execute
  gamestate_0();

  //call the gamestate0_5 function file to execute
  gamestate0_5();

  //call the gamestate1 function file to execute
  gamestate_1();

  //call file function Gamestate 2

  gamestate_2(score);

  
  gamestate_3();


drawSprites();
 
}

spawnships();