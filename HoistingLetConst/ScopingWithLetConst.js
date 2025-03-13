// Scoping with let and const
// Block-Level Scope:
// Variables declared with let and const are only
// accessible within the nearest block (curly braces).

// let vs const:
// let: Allows re-assignment.
// const: Immutable binding
// (but object properties can still change).

let a = 10;
a = 20; // Valid

const b = 10;
// b = 20; // Error: Assignment to constant variable.

if (true) {
  let c = 30;
  console.log(c); // 30 (block scope)
}
// console.log(c); // ReferenceError: c is not defined
