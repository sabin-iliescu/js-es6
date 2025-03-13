// Encapsulation in ES6 Classes
// Definition:
// Encapsulation is the process of bundling
// data (properties) and methods that operate on
// that data within a single unit (class),
// while restricting direct access to some of
// the object's components.

// Key Points:

// 1. Private Fields: ES6 now supports truly private fields
// using the # syntax.
// 2. Controlled Access: Use methods (getters/setters) to
// access or modify private data.
// 3. Data Hiding: Encapsulation helps prevent accidental
// interference and misuse of internal data.

class BankAccount {
  // Private field
  #balance = 0;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: $${amount}`);
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew: $${amount}`);
    } else {
      console.log('Insufficient funds or invalid amount.');
    }
  }

  // Public getter method to access the private field
  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(100);
account.deposit(50);
account.withdraw(30);
console.log('Current Balance:', account.getBalance()); // Output: 120

// Encapsulation ensures that the #balance property cannot be accessed or modified
// directly from outside the class, leading to more secure and maintainable code.
