class Box{
    constructor(x,y,width,height,color){
    var boxoptions = {
        restitution:0.4,
        friction:0.4,
        density:1.4
    }
    this.body = Bodies.rectangle(x,y,width,height,boxoptions);
    this.width = width;
    this.height = height;
    this.color = color;
    if (this.color==="pink"){
        this.image = loadImage("pink.png");
    }
    if (this.color==="red"){
        this.image = loadImage("red.png");
    }
    if (this.color==="purple"){
        this.image = loadImage("purple.png");
    }
    World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
     fill(this.color);
        imageMode(CENTER);
        image( this.image,this.body.position.x,this.body.position.y, 50, 50);
        pop();
    }
}