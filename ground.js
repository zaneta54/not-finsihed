class Ground{
    constructor(x,y,width,height,color){
        var groundoptions = {
            isStatic:true
        }
this.body =Bodies.rectangle(x,y,width,height,groundoptions);
this.width  = width;
this.height = height;
this.color = color;
World.add(world,this.body);
    }
    display(){
        push();
        var pos = this.body.position;
        fill(this.color);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}