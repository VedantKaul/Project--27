
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob_1, bob_2, bob_3, bob_4, bob_5;
var rope, rope_2, rope_3, rope_4, rope_5;
var engine, world;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

  bob_1 = new Bob(277.5, 420);
  bob_2 = new Bob(315, 420);
  bob_3 = new Bob(345, 420);
  bob_4 = new Bob(376.5, 420);
  bob_5 = new Bob(447.5, 420);

  rope = new Rope(bob_1.body, {x: 277.5, y:300});

  rope_2 = new Rope(bob_2.body, {x: 318, y:300}, true);
  rope_3 = new Rope(bob_3.body, {x: 362.5-4, y:300}, true);
  rope_4 = new Rope(bob_4.body, {x: 405-6, y:300}, true);
  rope_5 = new Rope(bob_5.body, {x: 447.5, y:300});

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);

  rope_2 = line(320, 300, 320, 420);
  rope_2.color("white");
  rope_3 = line(362.5, 300, 362.5, 420);
  rope_3.color("white");
  rope_4 = line(405, 300, 405, 420);
  rope_4.color("white");
  
  bob_1.display();
  bob_5.display();

  bob_2 = circle(320, 420, 40);
  bob_3 = circle(362.5, 420, 40);
  bob_4 = circle(405, 420, 40);

  rope.display();
  rope_5.display();

  keyPressed();
  drawSprites();
}

function keyPressed(){
  if(keyDown("LEFT_ARROW")){
  Body.applyForce(bob_1.body, bob_1.body.position,{x: 90, y:15});
  }
}