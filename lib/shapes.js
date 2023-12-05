//creates shape class and defines what shape is
class Shape {
    constructor() {
      this.color = "";
    }
    // all shapes given setcolor function
    setColor(colorVar) {
      this.color = colorVar;
    }
  }

// triangle inherits shape properties
  class Triangle extends Shape {
    render() {
      //returns triangle with input determining color
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  // square also inherits shape properties
  class Square extends Shape {
    render() {
      // returns square with input determinging color
      return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
  }

  // circle will also inherit from the parent class shape
  class Circle extends Shape {
    render() {
      // Returns circle with input determining color
      return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
  }
  
  