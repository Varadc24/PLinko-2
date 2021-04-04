class Pincko{
    consturctor(x,y,r) {
        var options = {
            isSatic:true
        }
        this.body = bodies.circle(x,y,this.this.r,options);
        this.r = r;
        world(world,world.add);

    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        Fill("white");
        rect = (pos.x,pos.y,r);
    }
};