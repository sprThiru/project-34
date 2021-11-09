
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var background,backgroundImg;
var earth,earthImg;
var sun,sunImg;
var title,titleImg;
var end,endImg
var monster,monsterImg;
var star,starImg;
var virus,virusImg;

function preload() {
  backgroundImg = loadImage ("Galaxy.jpg")
  earthImg = loadImage ("Earth.png")
  sunImg = loadImage ("Sun.png")
  titleImg = loadImage ("GetReady.png")  
  endImg = loadImage ("GameOver.png")  
  monsterImg = loadImage ("Monster.png")
  starImg = loadImage ("Star.png")
  virusImg = loadImage ("Virus.png")
}

function setup() {
  createCanvas(1600,750);

  engine = Engine.create();
  world = engine.world;
  
  blower = createImg("balloon.png");
  blower.position(10,250);
  blower.size(150,100);
  blower.mouseClicked(airblow);

  blower = createImg("balloon.png");
  blower.position(10,250);
  blower.size(150,100);
  blower.mouseClicked(airblow);

  blower = createImg("balloon.png");
  blower.position(10,250);
  blower.size(150,100);
  blower.mouseClicked(airblow);

  blower = createImg("balloon.png");
  blower.position(10,250);
  blower.size(150,100);
  blower.mouseClicked(airblow);

  blower = createImg("balloon.png");
  blower.position(10,250);
  blower.size(150,100);
  blower.mouseClicked(airblow);

  blower = createImg("balloon.png");
  blower.position(10,250);
  blower.size(150,100);
  blower.mouseClicked(airblow);

  blower = createImg("balloon.png");
  blower.position(10,250);
  blower.size(150,100);
  blower.mouseClicked(airblow);


}


function draw() 
{
  background("backgroundImg");

  Engine.update(engine);
  
}

