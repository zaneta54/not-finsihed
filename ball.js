class Ball {
    constructor(x,y){
    var balloptions = {
        restitution:0.4,
        friction:0.5,
        density:1.5
    }


this.body = Matter.Bodies.circle(x,y,30,balloptions);
World.add(world,this.body);

    }
    display(){
        push();
  fill('pink');
  ellipse(this.body.position.x,this.body.position.y,60,60);
  pop();
    }
   
}