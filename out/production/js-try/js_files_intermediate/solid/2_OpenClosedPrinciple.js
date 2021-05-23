/*
    Open Closed Principle.
    Своими словами: каждая сущность должна быть открыта к расширению и закрыта к изменению.
    - В оригинале предлагалось реализовывать данный принцип через наследование (в ООП), но такой
    подход заставляет меняться клиентский код, что не есть хорошо, поэтому Мартином был предложен
    полиморфный подход через интерфейсы (для Java).
    - Но в JS нет интерфейсов, поэтому используем наследование =/
 */

class Shape{
    /*
        Базовый класс, от которого потом будут наследоваться все остальные фигуры.
        В нём объявлен метод для рассчёта площади, который потом будет прописан в каждом наследнике,
        а иначе будет выкинуто исключение. Таким образом при расчёте сумарной площади не придётся
        следить за типом фигуры, что позволяет масштабировать список фигур без изменений внутри уже
        написанного класса для расчёта сумарной площади.
     */
    area(){
        throw new Error('Area method not implemented!')
    }
}

class Square extends Shape{
    constructor(size) {
        super();
        this.size = size;
    }

    area() {
        return this.size ** 2;
    }
}

class Circle extends Shape{
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius**2;
    }
}

class Rectangle extends Shape{
    constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
    }

    area() {
        return this.a * this.b;
    }
}

class RectTriangle extends Shape{
    constructor(a,b) {
        super();
        this.a = a;
        this.b = b;
    }

    area() {
        return this.a * this.b;
    }
}
class AreaCalculator{
    /*
        Класс для рассчёта сумарной площади фигур.
        Изначально были только квадрат и круг, потом будет добавлен прямоугольник и трегольник
     */
    constructor(shapes = []) {
        this.shapes = shapes;
    }

    sum(){
        return this.shapes.reduce((acc, shape)=>{
            acc += shape.area();
            return acc;
        },0)
    }
}

const calc = new AreaCalculator([
    new Square(10),
    new Circle(1),
    new Circle(5),
    new Rectangle(10, 20),
    new RectTriangle(2, 4)
]);

console.log(calc.sum());
// console.log(new Circle(5));
// console.log(new Square(5));