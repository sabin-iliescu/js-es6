// Class Expressions:
// Classes can be defined as expressions and assigned to variables.

// Best Practices:
// Use strict mode (applied automatically within classes).
// Remember that classes are not hoisted.
// Always instantiate classes with the new keyword.

const Car = class {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  displayInfo() {
    console.log(`Car: ${this.make} ${this.model}`);
  }
};

const car1 = new Car('Toyota', 'Corolla');
car1.displayInfo(); // Output: Car: Toyota Corolla
