// What Are ES6 Classes?

// Definition:
// ES6 classes provide a cleaner, clearer syntax to
// create objects and handle inheritance.
// Note:
// They are essentially syntactic sugar over
// JavaScript's existing prototype-based inheritance.

// Benefits:
// More readable and concise
// Encourages a more object-oriented approach
// Automatic strict mode inside class definitions

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

// Creating an instance of Person
const person1 = new Person('Alice', 30);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.

// Key Points:

// The constructor method initializes object properties.
// Methods defined in the class become part of the prototype.
