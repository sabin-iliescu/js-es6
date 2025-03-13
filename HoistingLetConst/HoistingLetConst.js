// Understanding Hoisting in ES6

// What is Hoisting?
// Traditional var declarations are hoisted, which can lead to
// unexpected behavior.

// Key Differences:
// var: Function-scoped and hoisted (can be used before declaration).
// let & const: Block-scoped; are hoisted but
// reside in the “Temporal Dead Zone” until defined.

console.log(x); // undefined, because x is hoisted (with var)
var x = 5;

// For let and const, accessing them before declaration causes a ReferenceError.
// console.log(y); // ReferenceError
let y = 10;
