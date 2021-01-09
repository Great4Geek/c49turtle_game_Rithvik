
function spawnships() {
    if(frameCount % 280 === 0) {
      cruiseship = createSprite(-10,displayHeight/6,100,80);
     cruiseship.debug = true;
     
     console.log("cruiseship:" + cruiseship.x)
  
     
     if(frameCount%2===0)
     {
      trash = createSprite(cruiseship.x,cruiseship.y,30,30);
      trash.addImage(trashimage)
      trash.scale = 0.6
      trash.velocityY = 3
      trash.velocityX = random(-0.2,0.2)
      trash.lifetime = 300;
      //console.log(trash.x)
  
      trashgroup.add(trash)
     }
     
  
      //cruiseship.velocityX = -(6 + 3*score/100);
      
      cruiseship.velocityX = 4;
      
      //generate random obstacles
      
      var p = Math.round(random(1,2));
      if(p ===1)
      {
        cruiseship.x = -20
        cruiseship.velocityX = 5;
        
        var r = Math.round(random(1,2));
        
        if(r===1)
        {
          cruiseship.addImage(cruiseimage)
          
        }
  
        if(r===2)
        {
          cruiseship.addImage(cruise2image)
          
        }
        
      }
      
      if (p===2)
      {
        cruiseship.x = displayWidth+20
        cruiseship.velocityX = -5;
        cruiseship.addImage(cruise3image)
        
      }
  
      //assign scale and lifetime to the obstacle           
      cruiseship.scale = 0.8;
      cruiseship.lifetime = 300;
  
      //shipgroup.add(cruiseship)
      
    
    }
     


  }