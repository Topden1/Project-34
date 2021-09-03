//For this game I wanted to make a constraint and move it by air but for some reason it just does'nt work even without the air, I looked at our previous projects about contraints but for some reason it does'nt work.

const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var square,rope;
var square_con;
var air;

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

 rope = new Rope(7,{x:245,y:30});
 square = Bodies.square(300,300,20);
 Matter.Composite.add(rope.body,square);

 square_con = new Link(rope,square);


  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  rope.show();
  ellipse(square.position.x,square.position.y,30,30);
  Engine.update(engine);
  ground.show();
  

  function collide(body,sprite,x)
  {
    if(body!=null)
          {
           var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
            if(d<=x)
              {
                 return true; 
              }
              else{
                return false;
              }
           }
   
}

function airblow()
{
  Matter.Body.applyForce(fruit,{x:0,y:0},{x:0,y:-0.04});
  air.play();
}

}
