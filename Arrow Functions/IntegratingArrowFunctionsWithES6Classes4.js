// Integrating Arrow Functions with ES6 Classes
// Combining Concepts:
// Use arrow functions within class methods to
// simplify callbacks and preserve context.

class Button {
  constructor(label) {
    this.label = label;
  }

  attachClickHandler() {
    document.getElementById('myButton').addEventListener('click', () => {
      console.log(`Button ${this.label} clicked!`);
    });
  }
}

const myButton = new Button('Submit');
myButton.attachClickHandler();

// Advantage:
// No need for .bind(this)—this inside the arrow function
// always refers to the class instance.
