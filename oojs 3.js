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
class Square extends Shape {
  constructor(sideLength) { 
    super('square', 4, sideLength); 
  }
  calcArea() {
    console.log(`The ${ this.name }'s area is ${ this.sideLength * this.sideLength } squared.`);
  };
}
let square = new Square(4);
square.calcPerimeter();
square.calcArea();