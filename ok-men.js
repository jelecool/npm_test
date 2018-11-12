class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    // Getter
    get area() {
      return this.calcArea();
    }

    get space() {
        return this.calcSpace();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
    calcSpace() {
        return this.area * 4;
      }
  }
  
  const square = new Rectangle(10, 10);
  
  console.log(square.area, square.space);