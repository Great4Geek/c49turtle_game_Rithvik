function diver_moves()
{

    if(keyDown(LEFT_ARROW))
    {
      john.changeAnimation("swimmingleft",swimmingleft)
      john.x = john.x - 5
      netsprite.x = john.x - 100;
      netsprite.y = john.y+50
      netsprite.addImage(netimage)
    }
    
    if(keyDown(UP_ARROW))
    {
      john.angle = 70
      john.y = john.y -10;
    }
    
    if(keyDown(DOWN_ARROW))
    {
      john.angle = -70
      john.y = john.y +10;
    }

}