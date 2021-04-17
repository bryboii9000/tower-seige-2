const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground;
var ball,polygonImg;
var polygonYeeter;
var  blk1, blk2, blk3, blk4, blk5, blk6, blk7, blk8, blk9, blk10, blk11, blk12,blk13,
 blk14, blk15, blk16, blk17, blk18, blk19, blk20, blk21, blk22, blk23, blk24, blk25;
var dragonPolygonballZ
function preload(){
    polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground(450,390,900,20);
  ground1 = new Ground(390,300,250,10);
  ground2 = new Ground(700,200,200,10);


  blk1 = new Bulk(300,275,40,30);
  blk2 = new Bulk(330,275,40,30);
  blk3 = new Bulk(360,275,40,30);
  blk4 = new Bulk(390,275,40,30);
  blk5 = new Bulk(420,275,40,30);
  blk6 = new Bulk(450,275,40,30);
  blk7 = new Bulk(480,275,40,30);
  //level 1.1^^
  blk8 = new Bulk(330,235,40,30);
  blk9 = new Bulk(360,235,40,30);
  blk10 = new Bulk(390,235,40,30);
  blk11 = new Bulk(420,235,40,30);
  blk12 = new Bulk(450,235,40,30);
  //level 1.2^^
  blk13 = new Bulk(360,195,40,30);
  blk14 = new Bulk(390,195,40,30);
  blk15 = new Bulk(420,195,40,30);
  //level 1.3^^
  blk16 = new Bulk(390,155,40,30);
  //level 1.4^^
  blk17 = new Bulk(640,175,40,30);
  blk18 = new Bulk(670,175,40,30);
  blk19 = new Bulk(700,175,40,30);
  blk20 = new Bulk(730,175,40,30);
  blk21 = new Bulk(760,175,40,30);
  //level 2.1^^
  blk22 = new Bulk(670,135,40,30);
  blk23 = new Bulk(700,135,40,30);
  blk24 = new Bulk(730,135,40,30);
  //level 2.2^^
  blk25 = new Bulk(700,95,40,30);
  //level 2.3^^

  dragonPolygonballZ = Bodies.circle(50,200,20);
  World.add(world,dragonPolygonballZ);

  polygonYeeter = new SlingShot(this.dragonPolygonballZ,{x:150,y:175});

}
function draw() {

    background(95,158,160);

    textSize(20);
  fill(152,251,152);
  strokeWeight(0.2)
  stroke(0)
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
  textSize(15);
  fill(0,191,255);
  strokeWeight(0.3)
  stroke(0)
  text("For an other chance,Reattach",665,345);
  text("the polygon by pressing R",665,365);
  ground.display();
  ground.display();
  ground1.display();
  ground2.display();

  fill(30,144,255);
  blk1.display();
  blk2.display();
  blk3.display();
  blk4.display();
  blk5.display();
  blk6.display();
  blk7.display();
  fill(0,191,255);
  blk8.display();
  blk9.display();
  blk10.display();
  blk11.display();
  blk12.display();
  fill(0,206,209);
  blk13.display();
  blk14.display();
  blk15.display();
  fill(0,255,255);
  blk16.display();
  fill(72,209,204);
  blk17.display();
  blk18.display();
  blk19.display();
  blk20.display();
  blk21.display();
  fill(32,178,170);
  blk22.display();
  blk23.display();
  blk24.display();
  fill("teal");
  blk25.display();
  
  imageMode(CENTER)
  image(polygon_img,dragonPolygonballZ.position.x,dragonPolygonballZ.position.y,40,40)

  polygonYeeter.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.dragonPolygonballZ,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  polygonYeeter.fly();
}
function keyPressed(){
  if(keyCode === 82){
    polygonYeeter.attach(this.dragonPolygonballZ)
    }
}