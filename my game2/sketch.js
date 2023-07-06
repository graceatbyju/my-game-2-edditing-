
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
//var rabbit;
var rabbit1;

function preload()
{
	backgroundImg = loadImage("./assets/bg.gif");
  //rabbitRun=loadAnimation("assets/r1.png", "assets/r2.png", "assets/r3.png","assets/r4.png", "assets/r5.png")
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	engine = Engine.create();
	world = engine.world;
  rabbit1=new Rabbit(100, 500, 50, 180);


  
}


function draw() {
  //rectMode(CENTER);
  //background(0);
  background(backgroundImg);
  rabbit1.display();

  //drawSprites();
  Engine.update(engine);
drawSprites();

}



