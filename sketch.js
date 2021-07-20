const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var backgroundImg;

var ground, snowV=0, snow;

let snowI;

function preload() {
  snowI= loadImage('snow4.webp');

  backgroundImg = loadImage("snow3.jpg");
}
function setup() {

  engine = Engine.create();
  world = engine.world;

  snow = new Snow (200, -50, 100, 100);

  createCanvas(800,400);
}

function draw() {
  background(backgroundImg);  
  snow.display();
  Engine.update(engine);
  text ("Watch this kid have a rough day and most likely get frostbite.", 100, 100);

  if (frameCount % 180 === 0){
    snow = new Snow (200, -50, 100, 100);
  }
}


