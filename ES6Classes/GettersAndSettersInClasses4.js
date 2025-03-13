// Getters and Setters in Classes
// Encapsulating Data Access:
// Getters and setters allow controlled access
// to an object's properties.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  set area(value) {
    console.log('Area is a read-only property.');
  }
}

const rect = new Rectangle(5, 4);
console.log(rect.area); // Output: 20
rect.area = 50; // Output: Area is a read-only property.
