const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ball;
var ground


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options={
    isStatic:true
  }

  ground = Bodies.rectangle(400,350,800,20,ground_options);
  World.add(world,ground);

  var ball_options ={
    restitution: 0.5
  }

  ball = Bodies.circle(200,100,40,ball_options);
  World.add(world,ball);


  
}

function draw() {
  background(200);  
  Engine.update(engine);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y, 40,40);
//console.log(ball.position);
 rectMode(CENTER);
 rect (ground.position.x,ground.position.y,800,20);

}

  
