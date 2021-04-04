class Particle{
    constructor(x,y,r){
        var options = {
            isStatic:false

        }
        this.body = bodies.cicle(x,y,this.r,options);
        this.color = (random(0, 225),random(0, 225),random(0, 225))
        this.r = r;
        world(world,world.add);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        rect = (pos.x,pos.y,r);
    }
};