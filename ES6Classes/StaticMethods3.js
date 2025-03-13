// Advanced Class Features – Static Methods
// Static Methods:
// Belong to the class itself rather than to any instance.
// Ideal for utility functions that don't rely on instance properties.

class MathHelper {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathHelper.add(5, 3)); // Output: 8
