class ShapeFactory {
  createShape(type) {
    switch (type) {
      case "circle":
        return new Circle();
      case "square":
        return new Square();
      default:
        throw new Error("Unknown shape");
    }
  }
}
class Circle {
  draw() {
    console.log("⚪");
  }
}
class Square {
  draw() {
    console.log("⬜");
  }
}

const factory = new ShapeFactory();
const shape = factory.createShape("circle");
shape.draw(); // ⚪
