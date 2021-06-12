class Bob{
    constructor(x, y){
//test
        this.body = Bodies.circle(x, y, 20);
        World.add(world, this.body);
        }
    
    display(){
    var pos = this.body.position;
    fill(224, 6, 218);
    stroke(224, 6, 218);
    ellipse(pos.x, pos.y, 40);
    }
}
