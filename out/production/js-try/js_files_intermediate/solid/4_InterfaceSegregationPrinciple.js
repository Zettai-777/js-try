/*
    Interface Segregation Principle
    Своими словами: интерфейс прежде всего должен быть ориентирован на клиента, а не на сервер.
    В том случае, если клиентскому коду необходимо использовать какой то интерфейс сервера, то лучше создать несколько
    интерфейсов под каждую отдельную задачу, чем создавать один глобальный интерфейс, который включает в себя весь
    функционал.
    В JS реализуется через добавление к классам наследникам необходимого функционала при помощи Object.assign(), при этом
    в базовом классе лишний функционал вырезается и передаётся в отдельные объекты.

 */

class Animal{
    constructor(name) {
        this.name = name;
    }
}

const swimmer = {
    swim(){
        console.log(`${this.name} can swim`);
    }
}

const walker = {
    walk(){
        console.log(`${this.name} can walk`);
    }
}

const flier = {
    fly(){
        console.log(`${this.name} can fly`);
    }
}

class Dog extends Animal{

}

class Bird extends Animal{

}

class Fish extends Animal{

}

Object.assign(Dog.prototype, walker, swimmer) //Объединяет несколько объектов через прототипы
Object.assign(Bird.prototype, walker, flier) //Объединяет несколько объектов через прототипы
Object.assign(Fish.prototype, swimmer) //Объединяет несколько объектов через прототипы

const dog = new Dog('Rex');
dog.walk();
dog.swim();
const bird = new Bird('Bravo');
const fish = new Fish('Flanders');