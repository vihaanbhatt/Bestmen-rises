class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image1 = loadImage("Walking Frame/walking_1.png");
        this.image = loadImage("bat/bestmen.png")
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
        //load Image for BestMan
        
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
        
        if(frameCount >= 200){
            image(this.image,pos.x,pos.y+70,200,300)
        }
        else{
            image(this.image1,pos.x,pos.y+70,300,300);  
        }
    }
}
