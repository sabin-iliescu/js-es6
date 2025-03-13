// Arrow Functions – Syntax and Lexical this
// Implicit Returns and Block Bodies:
// Implicit return for one-liners.
// Use curly braces and an explicit return when more logic is needed.

// Implicit return:
const square = (n) => n * n;

// Block body:
const multiply = (a, b) => {
  const result = a * b;
  return result;
};

// Lexical this:
// Arrow functions capture the this value
// of the enclosing context.

class Timer {
  constructor() {
    this.seconds = 0;
  }

  start() {
    setInterval(() => {
      this.seconds++;
      console.log(`Seconds: ${this.seconds}`);
    }, 1000);
  }
}
const myTimer = new Timer();
myTimer.start();
