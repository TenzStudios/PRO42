class Drop {
    constructor(x,y){
       
        this.image = loadImage("drop.jpeg");
        this.drop = Bodies.circle(x,y,50);
        this.radius = 50;
        World.add(world, this.drop)
        //load Image for BestMan
        
    }

    display(){
        var pos = this.drop.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y,50,50)
    }
}