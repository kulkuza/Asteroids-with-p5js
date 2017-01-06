function Asteroid(pos, r) {
  if (pos) {
    this.pos = pos.copy();
  }
  else {
    this.pos = createVector(random(width), random(height));
  }
  if (r) {
    this.radius = r * 0.5
  }
  else {
    this.radius = random(30, 50);
  }
  this.velocity = p5.Vector.random2D();
  this.total = floor(random(5, 12));
  this.offset = [];
  
  for (var i = 0; i < this.total; i++) {
    this.offset[i] = random(-this.radius*0.5, this.radius*0.5);
  }
  
  this.update = function() {
    this.pos.add(this.velocity);
  }
  
  this.render = function() {
    push();
    stroke(255);
    noFill();
    translate(this.pos.x, this.pos.y);
    //ellipse(0,0,this.radius * 2);
    beginShape();
    for (var i = 0; i < this.total; i++) {
      var angle = map(i, 0, this.total, 0, TWO_PI);
      var r = this.radius + this.offset[i];
      var x = r*cos(angle);
      var y = r*sin(angle);
      vertex(x,y);
    }
    endShape(CLOSE);
    pop();
  }
  
  this.breakup = function() {
    var newA = [];
    newA[0] = new Asteroid(this.pos, this.radius);
    newA[1] = new Asteroid(this.pos, this.radius);
    return newA;
  }
  
  this.edges = function() {
    if (this.pos.x > width + this.radius) {
      this.pos.x = -this.radius;
    }
    else if (this.pos.x < -this.radius) {
      this.pos.x = width + this.radius;
    }
    
    if (this.pos.y > height + this.radius) {
      this.pos.y = -this.radius;
    }
    else if (this.pos.y < -this.radius) {
      this.pos.y = height + this.radius;
    }
  }
  
}