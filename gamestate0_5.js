function gamestate0_5()
{

    if(gamestate===12)
    {
  
  
        background(introscreen);
        turtlepicsprite.visible = true;
        turtlepicsprite.scale = 0.5;
        textSize(40);
        fill(50,200,50)
        text("Save The Turtles!", displayWidth/2.5, displayHeight/10 - 30);
    
        fill(100,100,150)
        textSize(35); 

        let z = 'Did you know that ocean pollution causes many turtles to die every year?'
        text(z,0, displayHeight/8);
        fill(150,50,20)
        textSize(40);
        text("Shockingly, a million marine animals including turtles\n die each year due to ocean pollution." , displayWidth/10, displayHeight/5)


        fill(100,150,50)
        textSize(30); 
        text("Press the left arrow key to continue.",displayWidth/2-140, displayHeight/4 + 100); 
  
        if(keyDown(LEFT_ARROW))
          {
            gamestate=1;
            turtlepicsprite.destroy();
          }
  
    }

}