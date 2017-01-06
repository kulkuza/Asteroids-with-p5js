function Laser(shippos, shiphead) {
  this.pos = createVector(shippos.x, shippos.y);
  this.velocity = p5.Vector.fromAngle(shiphead);
  this.velocity.mult(5);
  
  this.render = function() {
    push();
    stroke(255);
    strokeWeight(4);
    point(this.pos.x, this.pos.y);
    pop();
  }
  
  this.update = function() {
    this.pos.add(this.velocity);
  }
  
  this.hits = function(asteroid) {
    var d = dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y);
    if (d < asteroid.radius) {
      return true;
    }
    else {
      return false;
    }
  }
}