function gamestate_3(){

    if(gamestate === 3){
      
      background(winimg)
      fill(200,10,10)
      textSize(40)
      text("You Won! You saved the turtle. Reload the tab to play again.",displayWidth/5,displayHeight/2)
      sea_urchin2.destroy();
      sea_urchin.destroy();
      rock.destroy();
      rock2.destroy();
      rock3.destroy();
      john.destroy();
      turtle.destroy();
      netsprite.destroy();
      cruiseship.destroy();
      trash.destroy();
      coin.destroy();

     
    }

}