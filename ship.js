function Ship() {
  this.pos = createVector(width/2, height/2)
  this.size = 20;
  this.head = 0;
  this.rotation = 0;
  this.velocity = createVector(0,0);
  this.isAccelerating = false;
  
  this.render = function() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.head + PI/2);
    fill(0);
    stroke(255);
    triangle(-this.size, this.size, this.size, this.size, 0, -this.size);
    pop();
  }
  
  this.setAccelerating = function(bool) {
    this.isAccelerating = bool;
  }
  
  this.setRotation = function (angle) {
    this.rotation = angle;
  }
  
  this.turn = function(angle) {
    this.head += this.rotation;
  }
  
  this.accelerate = function() {
    var force = p5.Vector.fromAngle(this.head);
    force.mult(0.1);
    this.velocity.add(force);
  }
  
  this.edges = function() {
    if (this.pos.x > width + this.size) {
      this.pos.x = -this.size;
    }
    else if (this.pos.x < -this.size) {
      this.pos.x = width + this.size;
    }
    
    if (this.pos.y > height + this.size) {
      this.pos.y = -this.size;
    }
    else if (this.pos.y < -this.size) {
      this.pos.y = height + this.size;
    }

  }
  
  this.update = function() {
    if (this.isAccelerating) {
      this.accelerate();
    }
    this.pos.add(this.velocity);
    this.velocity.mult(0.99);
  }
}