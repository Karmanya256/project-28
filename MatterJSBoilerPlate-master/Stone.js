class Stone {  
    constructor( x, y,radius){
        var options = {
            'restitution':0,
            'friction':1,
            'density':1.2,
            'isStatic' : false
        }
        this.radius = radius
        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
        //this.image = loadImage("Images/stone.png");
    }
    display(){
        fill("black");
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
       }

}