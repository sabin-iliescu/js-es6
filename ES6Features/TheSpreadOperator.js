const numbers = [1, 2, 3];
console.log(...numbers);

// Passing array elements as separate arguments:
function add(a, b, c) {
  return a + b + c;
}
console.log(add(...numbers)); // Output: 6

// Spread Operator for Array Manipulation
//  - Use the spread operator to easily merge arrays or insert
//  elements into existing arrays.

const parts = ['shoulders', 'knees'];
const lyrics = ['head', ...parts, 'and', 'toes'];
console.log(lyrics);
// Output: ["head", "shoulders", "knees", "and", "toes"]

// Spread in Object Literals
//  - The spread operator can also be used to copy
// properties from one object to another or merge multiple objects.

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Merging objects:
const merged = { ...obj1, ...obj2 };
console.log(merged); // Output: { a: 1, b: 2, c: 3, d: 4 }

// Cloning an object:
const clone = { ...obj1 };
console.log(clone); // Output: { a: 1, b: 2 }
