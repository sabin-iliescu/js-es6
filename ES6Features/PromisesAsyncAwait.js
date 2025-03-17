// Promises, Async, and Await
// Modern JavaScript handles asynchronous operations using Promises,
// which can be further simplified with async and await.

// Promises:
// Represent a value that may be available now, later, or never.

// Async/Await:
// async functions always return a Promise.
// await pauses the function execution until the Promise settles.

// A function that returns a Promise
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data loaded');
    }, 2000);
  });
}

// Using async/await for asynchronous code
async function displayData() {
  try {
    const data = await fetchData();
    console.log(data); // Output after 2 seconds: Data loaded
  } catch (error) {
    console.error('Error:', error);
  }
}

displayData();

// Benefits:
//  - Promises provide a structured way to handle asynchronous tasks.
//  - Async/await makes asynchronous code look and behave like
// synchronous code for improved readability.
