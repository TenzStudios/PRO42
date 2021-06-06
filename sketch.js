const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;
var batAnimation,bat;


var engine, world;

var rand;



var thunderCreatedFrame=0;

function preload(){
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");

    batAnimation = loadAnimation("bat/bat1.png","bat/bat2.png","bat/bat3.png",
                        "bat/bat4.png","bat/bat5.png","bat/bat6.png",
                        "bat/bat7.png","bat/bat8.png","bat/bat9.png",
                        "bat/bat10.png","bat/bat11.png","bat/bat12.png");
   
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,700);
    umbrella = new Umbrella(200,500);

    drop = new Drop (30,40)
    drop1 = new Drop (50,60)
    drop2 = new Drop (70,80)
    drop3 = new Drop (90,100)
    drop4 = new Drop (110,120)
    drop5 = new Drop (130,160)
    drop6 = new Drop (150,180)
    drop7 = new Drop (170,200)
    drop8 = new Drop (190,220)
    drop9 = new Drop (210,240)
    drop10 = new Drop (230,260)
    drop11 = new Drop (250,280)
    drop12 = new Drop (270,300)
    drop13 = new Drop (290,320)
    drop14 = new Drop (310,340)
    drop15 = new Drop (330,360)
    drop16 = new Drop (350,380)
    drop17 = new Drop (370,400)
    drop18 = new Drop (390,420)
    drop19 = new Drop (410,440)
    drop20 = new Drop (430,460)

}

function draw(){
    Engine.update(engine);
    background(0); 

    //creating thunder
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }
    bat= createSprite(Math.round(random(0,400)),Math.round(random(0,400)));
    bat.addAnimation("moving_bat",batAnimation);
    bat.visible = false;
    if(frameCount % 100 === 0){
       bat.visible = true;
        bat.velocityX = Math.round(random(-4,4));
        bat.velocityY = Math.round(random(-4,4));
        bat.scale=0.4;
        
       
    }
    

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    umbrella.display();

    drop.display();
    drop1.display();
    drop2.display();
    drop3.display();
    drop4.display();
    drop5.display();
    drop6.display();
    drop7.display();
    drop8.display();
    drop9.display();
    drop10.display();
    drop11.display();
    drop12.display();
    drop13.display();
    drop14.display();
    drop15.display();
    drop16.display();
    drop17.display();
    drop18.display();
    drop19.display();
    drop20.display();

    drawSprites();
}   

