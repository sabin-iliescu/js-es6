// Exercise:
// Create a base class `Vehicle` with properties `make` and `model`.
// Add a method `getDetails` that returns a string with the make and model.
// Create a subclass `Car` that extends `Vehicle` and adds a `year` property.
// Override the `getDetails` method to include the year.

class Vehicle {
  // Your code here
}

class Car extends Vehicle {
  // Your code here
}

// Test your classes
const myCar = new Car('Toyota', 'Corolla', 2020);
console.log(myCar.getDetails()); // Output: Toyota Corolla (2020)
