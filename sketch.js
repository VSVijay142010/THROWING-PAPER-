const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj, ballObject,groundObject	;
var world;


function setup() {
	createCanvas(1500, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj=new Dustbin(1300,600);
	ballObject=new Ball(300,450,40);
	groundObject=new Ground(width/2,670,width,20);

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(255,0,102);

  dustbinObj.display();
  ballObject.display();
  groundObject.display();

}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(ballObject.body,ballObject.body.position,{x:85,y:-85});

  	}
}