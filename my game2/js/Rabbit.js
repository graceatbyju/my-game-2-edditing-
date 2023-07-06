class Rabbit {
  
  constructor(x, y, width, height) {
    this.positionX = x;
    this.positionY = y;
    var options = {
      isStatic: false
    };
   //var rabbit;
   var rabbitRun;
    this.body = Bodies.rectangle(x, y, width, height, options);

    //this.image=loadImage("assets/r1.png");
    rabbitRun=loadAnimation("assets/r1.png", "assets/r2.png", "assets/r3.png","assets/r4.png", "assets/r5.png");
    this.rabbit = createSprite(this.positionX, this.positionY, width, height);
    this.rabbit.scale = 0.3;
    this.rabbit.addAnimation('running',rabbitRun);
    //this.rabbit.velocityY= 10;

    World.add(world, this.body);
  }

jump(rabbitObj){
  if (keyCode === 32) {
    this.positionY= this.positionY-100;
    rabbitObj.velocityY=rabbitObj.velocityY-100;
  }
}
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    this.jump(this.rabbit);
    //drawSprites();
    //image(this.image, 0, 0, this.width, this.height);
    pop();
    
  }
}
