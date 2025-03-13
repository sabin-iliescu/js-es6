// Abstraction in OOP Classes
// Definition:
// Abstraction involves exposing only the necessary parts of an object
// while hiding complex implementation details. It allows developers to work
// with higher-level concepts without needing to understand the underlying complexity.

// Key Points:

// Abstract Classes: Although JavaScript doesn’t have built-in abstract classes,
// you can simulate them by throwing errors if someone attempts to instantiate the base
// class or use unimplemented methods.
// Simplified Interfaces: Abstraction helps in designing simple interfaces for complex systems.

// Simulating an abstract class
class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error('Cannot instantiate abstract class Shape directly.');
    }
  }

  // Abstract method
  calculateArea() {
    throw new Error("Method 'calculateArea()' must be implemented.");
  }
}

// Concrete subclass implementing the abstract method
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

const myRectangle = new Rectangle(5, 10);
console.log('Area of Rectangle:', myRectangle.calculateArea()); // Output: 50

// Uncommenting the following line will throw an error:
// const shape = new Shape();
