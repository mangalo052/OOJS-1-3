 class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }
  calcPerimeter() {
    console.log(`The ${ this.name }'s perimeter length is ${ this.sides * this.sideLength }.`);
  };
}

let square = new Shape('square', 4, 5);
let triangle = new Shape('triangle', 3, 3);
square.calcPerimeter();
triangle.calcPerimeter();