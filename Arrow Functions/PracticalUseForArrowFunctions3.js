// Practical Use Cases for Arrow Functions
// Common Use Cases:
// Shorter syntax for callbacks
// (e.g., in array methods like map, filter, reduce).
// Maintaining the lexical scope of this in event handlers
// and asynchronous callbacks.

const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8]
