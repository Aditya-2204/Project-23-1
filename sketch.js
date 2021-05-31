var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1, box2, box3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	var static = {
		'isStatic':true
	}
	box1=createSprite(400, 655, 200, 20, static);
	box2=createSprite(490, 615, 20, 100, static);
	box3=createSprite(310, 615, 20, 100, static);
	box1.shapeColor = "red";
	box2.shapeColor = "red";
	box3.shapeColor = "red";
	packageSprite=createSprite(width/2, 80);
	packageSprite.addImage("PackageImage", packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:false});
	
	packageSprite.x = packageBody.position.x;
	packageSprite.y = packageBody.position.y;

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
}

function keyPressed() {
	if (keyCode === LEFT_ARROW){

		helicopterSprite.x = helicopterSprite.x-20;
		translation={x:-20,y:0}
		Matter.Body.translate(packageBody, translation);

	}
	else if (keyCode === RIGHT_ARROW){
		helicopterSprite.x = helicopterSprite.x+20;
		translationheli={x:20, y:0}
		Matter.Body.translate(packageBody, translation);
	}
	else if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody, false);
	}
	
}