
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var boy, mango1,mango2,mango3,mango4,mango5;
var stone;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	tree = drawSprites()
	boy = new Boy()
	stone = new Stone(235,420,30)
	mango1 = new Mango()
	mango2 = new Mango()
	mango3 = new Mango()
	mango4 = new Mango()
	mango5 = new Mango()


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  	stone.display()
	boy.display()
	mango1.display()
	mango2.display()
	mango3.display()
	mango4.display()
	mango5.display()
	tree.display()
	
	
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}
function mouseRealeased(){
boy.fly();	

}
function fly(){

}
function collison(stone,mango){
	mangoBodyPosition=mango.body.position
	stoneBodyPosition=stone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPoition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=mango.r+stone.r){
		Matter.Body.setStatic(mango.body,false);
	}
}
function keyPressed(){
    if(keyCode===32){
        boy.place(stone.body);
        
    }

}


