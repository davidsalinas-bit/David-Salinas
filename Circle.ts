import { Shape } from "./Shape";

export class Circle extends Shape {
    private radius: number;

    constructor(radius: number) {
        super("Círculo");
        this.radius = radius;
    }

    public calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
