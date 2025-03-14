class BankAccount {
  // Static properties: shared among all instances
  static totalAccounts = 0;
  static accounts = [];

  constructor(owner, balance = 0) {
    this.owner = owner;
    this.balance = balance;

    // Update static properties when a new account is created
    BankAccount.totalAccounts++;
    BankAccount.accounts.push(this);
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(
        `${this.owner} deposited $${amount}. New balance: $${this.balance}`
      );
    } else {
      console.log('Deposit amount must be positive.');
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(
        `${this.owner} withdrew $${amount}. New balance: $${this.balance}`
      );
    } else {
      console.log(`${this.owner} has insufficient funds or invalid amount.`);
    }
  }

  // Static method: returns the total number of accounts created
  static getTotalAccounts() {
    return BankAccount.totalAccounts;
  }

  // Static method: returns an array of all account instances
  static getAllAccounts() {
    return BankAccount.accounts;
  }

  // Static method: finds an account by owner name
  static findAccountByOwner(ownerName) {
    return BankAccount.accounts.find((account) => account.owner === ownerName);
  }
}

// Create new bank accounts
const aliceAccount = new BankAccount('Alice', 1000);
const bobAccount = new BankAccount('Bob', 500);

// Perform transactions
aliceAccount.deposit(200); // Alice deposited $200. New balance: $1200
bobAccount.withdraw(100); // Bob withdrew $100. New balance: $400

// Accessing static methods and properties on the class itself
console.log('Total Accounts:', BankAccount.getTotalAccounts()); // Total Accounts: 2
console.log('All Accounts:', BankAccount.getAllAccounts()); // [ BankAccount {...}, BankAccount {...} ]

// Finding an account by owner's name using a static method
const foundAccount = BankAccount.findAccountByOwner('Bob');
console.log('Found Account:', foundAccount);
