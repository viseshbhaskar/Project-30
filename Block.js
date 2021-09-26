class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }

      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.visibility = 255;
    }

    display() {
      console.log(this.body.speed);

      push();
      //attempt # 1 to reduce visibility
      this.visibility = this.visibility - 5;
      tint(255,this.visibility)
      pop();

      if(this.body.speed <3) {
        var angle = this.body.angle;
        var pos= this.body.position;
        push();

        //attempt # 2 to reduce visibility
        this.visibility = this.visibility - 100;
        tint(255,this.visibility)
        
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);

        //attempt # 3 to reduce visibility
        this.visibility = this.visibility - 5;
        tint(255,this.visibility)

        rect(0,0,this.width, this.height);

        //attempt # 4 to reduce visibility
        this.visibility = this.visibility - 5;
        tint(255,this.visibility)

        pop();
      }
      else {
        push();
        World.remove(world,this.body);
        pop();
      }
  }
}