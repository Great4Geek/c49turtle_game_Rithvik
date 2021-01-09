function gamestate_0 ()

{


    if(gamestate===0)
    {
  
  
        background(introscreen);
        
        textSize(40);
        fill(50,200,50)
        text("Save The Turtles!", displayWidth/2.5, displayHeight/10 - 30);
  
        fill(200,50,50)
        textSize(30); 

        let s = 'This game was created to bring awareness about ocean pollution. In this game, you will have to use arrow keys \n to move up, down, left, and right. Use your net and let the turtle pass the game screen. Catch the floating plastic\n by making it touch the net. If you can get all the plastic until the turtle passes, the turtle is saved! However,\n if the turtle even touches a single piece of plastic, the game is over.'
        text(s,displayWidth/2-750, displayHeight/8);
        text("Press space to continue.",displayWidth/2-140, displayHeight/4 + 100); 
  
        if(keyDown("SPACE"))
          {
            gamestate= 12;
          }
  
    }






}