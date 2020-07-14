const Engine = Matter.Engine;
const World = Matter.World;
const Bodies  = Matter.Bodies;
var ball 
var box
var ground
var slingshot
var ground1;
var ground2;
var box1,box11,box12,box13,box14,box15;
var box2,box22,box23,box24,box25;
var boox3,box32,box33,box34;
var box4,box42,box43;
var box5,box52;
var box6;
var box1a,box2a,box3a,box4a,box5a;
var box1b,box2b,box3b,box4b;
var box1c,box2c,box3c;
var box1d,box2d;
var box1e;
function setup() {
  createCanvas(1800,800);
  engine = Engine.create();
  world = engine.world;
 ball = new Ball(150,400);
 console.log(ball.body.position.x);
 // box = new Box(100,640,50,50,'orange');
  ground = new Ground(0,750,1800,30,'yellow');
ground1 = new Ground(810,500,400,30,'green');
ground2 = new Ground(1200,700,400,30,'purple');
box1 = new Box(1200,475,50,50,'blue');
box11 = new Box(1150,475,50,50,'blue');
box12 = new Box(1100,475,50,50,'blue');
box13 = new Box(1050,475,50,50,'blue');
box14 = new Box(1000,475,50,50,'blue');
box15 = new Box(950,475,50,50,'blue');
box2 = new Box(1175,400,50,50,'violet');
box22 = new Box(1150,400,50,50,'violet');
box23 = new Box(1125,400,50,50,'violet');
box24 = new Box(1100,400,50,50,'violet');
box25 = new Box(1075,400,50,50,'violet');
box3 = new Box(1150,375,50,50,'blue');
box32 = new Box(1125,375,50,50,'blue');
box33 = new Box(1100,375,50,50,'blue');
box34 = new Box(1075,375,50,50,'blue');
box4 = new Box(1125,300,50,50,'violet');
box42 = new Box(1100,300,50,50,'violet');
box43 = new Box(1075,300,50,50,'violet');
box5 = new Box(1100,275,50,50,'blue');
box52 = new Box(1075,275,50,50,'blue');
box6 = new Box(1075,200,50,50,'violet');
box1a = new Box(1150,750,50,50,'pink');
box2a = new Box(1100,750,50,50,'pink');
box3a = new Box(1050,750,50,50,'pink');
box4a = new Box(1000,750,50,50,'pink');
box5a = new Box(950,750,50,50,'pink');
box1b = new Box(1100,700,50,50,'brown');
box2b = new Box(1050,700,50,50,'brown');
box3b = new Box(1000,700,50,50,'brown');
box4b = new Box(950,700,50,50,'brown');
box1c = new Box(1050,650,50,50,'pink');
box2c = new Box(1000,650,50,50,'pink');
box3c = new Box(950,650,50,50,'pink');
box1d = new Box(950,600,50,50,'brown');
box2d = new Box(900,600,50,50,'brown');
box1e = new Box(950,550,50,50,'pink');
  slingshot = new Slingshot(ball.body,{x:150,y:250});
}

function draw() {
  background(255);  
  Engine.update(engine);
  ball.display();
 // box.display();
 ground.display();
 ground1.display();
 ground2.display();
 box1.display();
 box11.display();
 box12.display();
 box13.display();
 box14.display();
 box15.display();
 box2.display();
 box22.display();
 box23.display();
 box24.display();
 box25.display();
 box3.display();
 box32.display();
 box33.display();
 box34.display();
 box4.display();
 box42.display();
 box43.display();
 box5.display();
 box52.display();
 box6.display();
 box1a.display();
 box2a.display();
 box3a.display();
 box4a.display();
 box5a.display();
 box1b.display();
 box2b.display();
 box3b.display();
 box4b.display();
 box1c.display();
 box2c.display();
 box3c.display();
 box1d.display();
 box2d.display();
 box1e.display();
  slingshot.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slingshot.fly();
}