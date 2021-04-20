class Cylinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }
  Volume() {
    var x = this.height * (this.radius * this.radius) * Math.PI;
    x = x.toFixed(4);
    return x;
  }
}

var cylinder = new Cylinder(2, 4);
var v = cylinder.Volume();

console.log(v);
