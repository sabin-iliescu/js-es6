// Rest Parameters
//  - Rest parameters allow you to represent
//  an indefinite number of arguments as an array.

function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10

// Benefits:
//  - Cleaner and more readable code.
//  - Flexibility to work with any number of parameters.
