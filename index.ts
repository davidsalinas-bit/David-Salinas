import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Triangle } from "./Triangle";
import { Shape } from "./Shape";

const shapes: Shape[] = [
    new Circle(5),          // Radio = 5
    new Rectangle(4, 7),    // Base = 4, Altura = 7
    new Triangle(6, 3)      // Base = 6, Altura = 3
];

console.log("=== Cálculo de Áreas Geométricas ===");
shapes.forEach(shape => {
    console.log(`Área del ${shape.getName()}: ${shape.calculateArea().toFixed(2)}`);
});
