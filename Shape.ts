export abstract class Shape {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    // Método abstracto que cada figura debe resolver
    abstract calculateArea(): number;

    public getName(): string {
        return this.name;
    }
}
