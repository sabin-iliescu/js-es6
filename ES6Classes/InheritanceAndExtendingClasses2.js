// Extending a Class:
// Use the extends keyword to create a subclass
// that inherits properties and methods from a parent class.

class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // Calls the parent class's constructor
    this.jobTitle = jobTitle;
  }

  work() {
    console.log(`${this.name} is working as a ${this.jobTitle}.`);
  }
}

// Creating an instance of Employee
const employee1 = new Employee('Bob', 40, 'Developer');
employee1.greet(); // Inherited method
employee1.work(); // Output: Bob is working as a Developer.

// Highlights:

// Use super() to access the parent class's constructor and methods.
// Subclasses can add their own
// methods and override inherited ones if needed.
