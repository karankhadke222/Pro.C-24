class Stone {
	constructor(x,y)
	{
	var options={
		restitution:0.8,
		friction:0.9,
		density:12
	}
		this.width=20;
		this.height=20;
		this.body=Bodies.rectangle(x,y,50,50, options)
		World.add(world, this.body);

	}
	display()
	{
			var pos = this.body.position;		
			push()
			translate(pos.x,pos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("red");
			fill("red");
			rectMode(CENTER);
            rect(0,0,this.width,this.height);
			pop()
	}

}