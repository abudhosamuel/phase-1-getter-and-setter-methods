// Add your Circle class here

class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    // Getter for diameter
    get diameter() {
      return this.radius * 2;
    }
  
    // Setter for diameter
    set diameter(diameter) {
      this.radius = diameter / 2;
    }
  
    // Getter for circumference
    get circumference() {
      return Math.PI * this.diameter;
    }
  
    // Setter for circumference
    set circumference(circumference) {
      this.radius = circumference / (Math.PI * 2);
    }
  
    // Getter for area
    get area() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    // Setter for area
    set area(area) {
      this.radius = Math.sqrt(area / Math.PI);
    }
  }
  
  // Example usage:
  const circle = new Circle(5);
  console.log(`Radius: ${circle.radius}`);           // Radius: 5
  console.log(`Diameter: ${circle.diameter}`);       // Diameter: 10
  console.log(`Circumference: ${circle.circumference}`); // Circumference: 31.41592653589793
  console.log(`Area: ${circle.area}`);               // Area: 78.53981633974483
  
  circle.diameter = 20;
  console.log(`New Radius after setting Diameter: ${circle.radius}`); // New Radius after setting Diameter: 10
  
  circle.circumference = 62.83185307179586;
  console.log(`New Radius after setting Circumference: ${circle.radius}`); // New Radius after setting Circumference: 10
  
  circle.area = 314.1592653589793;
  console.log(`New Radius after setting Area: ${circle.radius}`); // New Radius after setting Area: 10
  