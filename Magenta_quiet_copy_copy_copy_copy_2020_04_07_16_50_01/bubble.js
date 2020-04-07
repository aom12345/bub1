class bubble{
  constructor(){
  var allInstances=[];
  //var colors =random('green','red');
  var radius = random(30,130);
  this.width = radius;
  this.height = radius;
  this.x = random(30,this.width);
  this.y = random(30,this.height);
  
  this.color = 255,204,100;
  this.velocityX = random(-2,+2);
  this.velocityY = random(-2,+2);

  this.display=function() {
    stroke(225);
    fill(255,204,100);
    ellipse(this.x,this.y,this.width,this.height);
    }
    this.move = function() {
      this.x=this.x+this.velocityX;
      this.y=this.y+this.velocityY;
    }
  }
}    
    