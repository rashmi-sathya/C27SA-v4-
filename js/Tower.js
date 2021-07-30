
class Tower {
    constructor(x, y, width, height) {
      var options = {
//set the static body(challenge 2)
      
      };
this.width = width;
    this.height = height;
      //write the instruction to create a rectangular tower body(challenge1)
      //add the option inside the rectangular body(challenge 2)
      //Add this object to the World(challenge 2)
    }
display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
//display the rect function (challenge 3)
  pop();
  }
}
