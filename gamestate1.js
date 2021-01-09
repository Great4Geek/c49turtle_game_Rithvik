function gamestate_1()
{

    if(gamestate===1){
        background(rgb(200,100,50))
        beach_background.visible=true;
        john.visible=true;
        
        //portal_1.visible = true;
        textSize(40);
        text("Press right arrow to move John to the right in order to get to the next level.",200,200);
        
        if (keyDown(RIGHT_ARROW)){
        john.x = john.x+4;
        }
        
        if (keyDown(LEFT_ARROW)){
          john.x = john.x-4;
        }
        
        }
        
        if (john.x === portal_1.x){
        gamestate = 2
        
        }
        

}