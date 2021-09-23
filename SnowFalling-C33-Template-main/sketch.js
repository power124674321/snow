const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snowIMG
var girl,girlIMG
var snow=[],s


function preload(){
snowIMG=loadImage("snow2.jpg")
girlIMG=loadImage("girl.png")
  
}


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  girl=createSprite(700, 300, 50, 50);
  girl.addImage(girlIMG)
  girl.scale=0.08

}

function draw() {
  background(snowIMG);  
  Engine.update(engine);
  if(frameCount%10===0){
    snow.push(s=new Snow (random(0,800),-10,40,40))
    for(var i=0;i<snow.length;i++) {
      snow[i].display();
    }
  }

  
  
  drawSprites();
}