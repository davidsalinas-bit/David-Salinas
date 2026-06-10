import { Shape } from "./Shape";

export class Triangle extends Shape {
    private base: number;
    private height: number;

    constructor(base: number, height: number) {
        super("Triángulo");
        this.base = base;
        this.height = height;
    }

    public calculateArea(): number {
        return (this.base * this.height) / 2;
    }
}
