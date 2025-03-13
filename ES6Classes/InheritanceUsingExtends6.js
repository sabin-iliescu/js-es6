// Inheritance using extends
// Overview:
// The extends keyword allows a class to inherit properties
// and methods from another class, making code more modular and reusable.

// Key Concepts:

// Parent Class: The class whose properties and methods
// are inherited.
// Child Class: The class that inherits
// using the extends keyword.
// Using super:
// In the constructor, super() calls the
// parent class’s constructor.
// Within methods, super.methodName() can be used
// to call a method defined in the parent class.

// Parent Class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

// Child Class that extends Animal
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent constructor
    this.breed = breed;
  }

  // Overriding the speak method
  speak() {
    super.speak(); // Optionally call the parent's speak method
    console.log(`${this.name} barks.`);
  }
}

// Create an instance of Dog
const myDog = new Dog('Buddy', 'Golden Retriever');
myDog.speak();
// Output:
// Buddy makes a noise.
// Buddy barks.

// Takeaways:

// Use extends to share common functionality.
// The super keyword is essential for correctly initializing
// the inherited properties.
// Overriding methods in the child class allows you to
// extend or modify behavior.
