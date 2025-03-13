// Polymorphism in ES6 – Concept & Benefits
// Definition:
// Polymorphism allows objects of different classes to be
// treated through a common interface, enabling methods
// to behave differently based on the object's actual type.

// Key Features:

// Method Overriding: Child classes redefine methods inherited
// from a parent class.
// Dynamic Dispatch: The method invoked is determined
// at runtime based on the object’s type.

// Benefits:

// Promotes flexibility and extensibility in code design.
// Encourages decoupling, as functions can operate on a
// general type (e.g., Animal) rather than specific
// implementations.

// Base class: Animal
class Animal {
  speak() {
    console.log('The animal makes a sound.');
  }
}

// Child class: Dog overrides speak
class Dog extends Animal {
  speak() {
    console.log('The dog barks.');
  }
}

// Child class: Cat overrides speak
class Cat extends Animal {
  speak() {
    console.log('The cat meows.');
  }
}

// A function that uses polymorphism:
function letAnimalSpeak(animal) {
  animal.speak();
}

// Instances of different animals
const myDog = new Dog();
const myCat = new Cat();
const genericAnimal = new Animal();

// Dynamic dispatch in action:
[myDog, myCat, genericAnimal].forEach((animal) => letAnimalSpeak(animal));

// Expected Output:
// "The dog barks."
// "The cat meows."
// "The animal makes a sound."
