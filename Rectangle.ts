import { Shape } from "./Shape";

export class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        super("Rectángulo");
        this.width = width;
        this.height = height;
    }

    public calculateArea(): number {
        return this.width * this.height;
    }
}
