function gamestate_2 (score){
     
    if (gamestate===2)
{
  
  background(underwater)
  //the sound file crashes the game, that's why I commented it.
  //playtune.loop();

  textSize(20)
text("score:" + score, displayWidth/2,displayHeight/8);

beach_background.visible = false;
rock.visible = true;
rock2.visible=true;
rock3.visible=true;
sea_urchin.visible = true;
sea_urchin2.visible = true;
coin.visible = true;

netsprite.visible = true;
netsprite.x = john.x + 100;
netsprite.y = john.y+50;
netsprite.scale = 0.2;
netsprite.addImage(netrightimage)


//turtle info:
//make the turtle show up
turtlesprite.visible = true;
turtlesprite.x = turtlesprite.x-0.2

spawnships();



john.changeAnimation("swimming",swimming)

if(keyDown(RIGHT_ARROW))
{
  john.changeAnimation("swimming",swimming) 
  john.x = john.x + 5

  //right facing net instructions
  netsprite.x = john.x + 100;
  netsprite.y = john.y+50;
  netsprite.addImage(netrightimage);

}

//call the player movement file function
diver_moves();

/*sea_urchin.debug = true;
john.debug = true;
sea_urchin2.debug = true;
rock.debug = true;
rock2.debug = true;
rock3.debug = true;*/

sea_urchin.setCollider("rectangle",0,10,100,100)
sea_urchin2.setCollider("rectangle",0,0,100,100)
rock.setCollider("rectangle",-5,10,50,80)
rock2.setCollider("rectangle",0,10,55,80)
rock3.setCollider("rectangle",5,10,50,80)
john.setCollider("rectangle",10,5,100,35)



if(john.isTouching(sea_urchin))
{
score = score-1
console.log(score)
gethit.play();

if(john.x < displayWidth/8)
{
  john.x = displayWidth/8 - 150
}
if(john.x > displayWidth/8)
{
  john.x = displayWidth/8 + 150
}



}

if(john.isTouching(sea_urchin2))
{
score = score-1
sea_urchin2.displace(john)
gethit.play();

if(john.x < sea_urchin2.x)
{
  john.x = sea_urchin2.x - 100
}
if(john.x > sea_urchin2.x)
{
  john.x = sea_urchin2.x + 100
}


}

if(john.isTouching(rock))
{
score= score-1
gethit.play();

if(john.x < rock.x)
{
  john.x = rock.x - 200
}
if(john.x > rock.x)
{
  john.x = rock.x + 200
}

}

if(john.isTouching(rock2))
{
score= score-1
gethit.play();

if(john.x < rock2.x)
{
  john.x = rock2.x - 150
}
if(john.x > rock2.x)
{
  john.x = rock2.x + 150
}

}

if(john.isTouching(rock3))
{
score= score-1
gethit.play();

if(john.x < rock3.x)
{
  john.x = rock3.x - 200
}
if(john.x > rock3.x)
{
  john.x = rock3.x + 200
}

}

if (john.isTouching(coin)){
  score = score+50;
  cointune.play()
  coin.destroy();
  coin.x = displayWidth/1.2
}

console.log(score)

john.scale = 1

if(john.isTouching(turtlesprite))
{
turtlesprite.x = turtlesprite.x+30;
turtlehit.play()
}


//set john's maximum height limit for play state
if(john.y <= 250)
{
john.y = 250;
}

//set john's minimum height limit for playstate

if(john.y>=760)
{
john.y = 750;
}


//set john's minimum x limit for playstate
if(john.x <= 0)
{
john.x = 40;
}

//set john's maximum x limit for playstate
if(john.x >= displayWidth)
{
john.x = displayWidth - 40;
}




//what happens if the turtle reaches the end?
if(turtlesprite.x <= 0){
  gamestate = 3
}

//.log(trashgroup)
//what happens if garbage touches the turtle?
if(trashgroup.isTouching(turtlesprite))
{
  gamestate = 4

}


/*if(john.isTouching(turtlesprite))
{
turtlesprite.x = turtlesprite.x+30;
turtlehit.play()
}*/

//console.log(gamestate);


}  



}