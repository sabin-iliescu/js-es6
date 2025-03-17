class Person {
  constructor(firstName, lastName, birthYear) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthYear = birthYear;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  set fullName(name) {
    const parts = name.split(' ');
    if (parts.length < 2) {
      throw new Error('Please provide both first and last name.');
    }
    this._firstName = parts[0];
    this._lastName = parts[1];
  }

  get age() {
    const currentYear = new Date().getFullYear();
    return currentYear - this._birthYear;
  }

  set age(newAge) {
    if (newAge <= 0) {
      throw new Error('Age must be a positive number.');
    }
    const currentYear = new Date().getFullYear();
    this._birthYear = currentYear - newAge;
  }

  get greeting() {
    return `Hello, my name is ${this.fullName} and I am ${this.age} years old.`;
  }
}

const person = new Person('Alice', 'Johnson', 1985);

console.log('-----------Using getters-------------');

// Using getters
console.log(person.fullName);
console.log(person.age);
console.log(person.greeting);

console.log('----------Using setters--------------');

// Using setters to update values
try {
  person.fullName = 'Bob Smith';
  console.log(person.fullName);

  person.age = 30;
  console.log(`Updated age: ${person.age}`);
  console.log(`New birth year: ${person._birthYear}`);
  console.log(person.greeting);
} catch (error) {
  console.error(error.message);
}
