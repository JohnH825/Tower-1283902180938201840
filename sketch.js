const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}


function setup() {
  canvas = createCanvas(1525,750);

  engine = Engine.create();
  world = engine.world;
tower = new Tower(170, 435, 240, 430)

  rectMode(CENTER);
  ellipseMode(RADIUS);
  //Use a new keyword to create a tower object.(challenge 4)
}

function draw() 
{
  background(189);
  image(backgroundImg, 0, 0, width, height);
tower.display(150, 350, 100, 100)
  Engine.update(engine);
//display tower(challenge 4)
 
}

