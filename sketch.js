
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(200,150);
	bobObject2 = new Bob (300,150);
	bobObject3 = new Bob (400,150);
	bobObject4 = new Bob (500,150);
	bobObject5 = new Bob (600,150);
	roof = new Roof(400,100,300,50);
	//rope1 = new Rope(bobObject1.body,roofObject.body,bobDiameter*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
	roof.display();
  drawSprites();
 
}



