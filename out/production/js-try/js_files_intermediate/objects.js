/*
    Objects.
    Объекты можно создавать различными способами:
    1) Через {} - const obj = {key1: value1, key2: value2}
    2) Через new Object - const obj = new Object({key1: value1, key2: value2})
    3) Через Object.create({},{}). При этом в первых фигурных скобках передаётся прототип для текущего объекта, во вторых
    свойства самого объекта. Свойствами в свою очередь также выступают объекты. У свойств могут быть заданы описания для
    получения возможности итерирования по ним, изменения, удаления и т.д. Также свойствам можно назначать getter-ы и setter-ы
    для реализации специфичных действий над свойством.
 */


//1
const person1 = {
    name: 'Misha',
    age: 29
}

//2
const person2 = new Object({name: 'Zettai', surName: 'Makenai'});

//3
const person3 = Object.create({
    printNick(){             //задаём в прототипе объекта функцию
        console.log('Person nick: ', prompt('Input your nickname'))
    }
},{
    name: {                  //property
        value: 'Zhan-Michel',
        enumerable: true,    //property descriptor: устанавливаем свойству возможность итерироваться (по умолчанию false)
        writable: true,      //property descriptor: устанавливаем свойству возможность перезаписываться (по умолчанию false)
        configurable: true   //property descriptor: устанавливаем свойству возможность изменяться, в т.ч. удалять поля (по умолчанию false)
    },
    birthYear: {
        value: 1991
    },
    age: {
        get(){              //getter, вычисляющий возраст персоны на основании её года рождения, по итогу задаёт значение свойству
            return new Date().getFullYear() - this.birthYear;
        },
        set(value) {
            console.log('Set age', value);
            // this.age = value;
            // document.body.style.backgroundColor = 'black';
        },
        enumerable: true
    }
})

person3.name = 'Zhan-Michel Bayanga'; //свойство изменит значение, так как writable = true
person3.birthYear = 2010;             //свойство не изменит значение, так как writable = false

function printInfo(object){
    console.group(object.name);
    for(let k in object){
        if(object.hasOwnProperty(k)){ //проверка на то, что свойство принадлежит объекту, а не его прототипу
            console.log(k, ' : ', object[k]);
        }
    }
    console.groupEnd();
}

printInfo(person1);
printInfo(person2);
printInfo(person3);

/*
    Классы ES6
    При создании класса и его экземляра через класс используются примерно те же правила, что и в Java.
    - Есть воможность наследования через extends и необходимость создавать конструктор через
    constructor(options){this.field = options.field}. При этом если мы наследуемся, то в конструкторе
    через super() передаются параметры в родительский конструктор.
    - Можно создавать геттеры и сеттеры, но в данном случае они будут являться не методами, а полями объекта.
    - Через синтаксис $field указывается приватная переменная, как правило содержащая в себе DOM-узел.
 */

const animal = {
    name: 'Lessie',
    age: 12,
    hasTail: true
}

class Animal{
    constructor(options) {
        this.name = options.name;
        this.age = options.age;
        this.hasTail = options.hasTail;
    }

    static type = 'MilkEating';

    makeSound(){
        console.log('Animal"s roar!!!')
    }
}

const animal1 = new Animal({
    name: 'Pigge',
    age: 7,
    hasTail: false
})

class Cat extends Animal{
    static type = 'CAT';

    constructor(options) {
        super(options);
        this.color = options.color;
    }

    makeSound() {
        super.makeSound(); //вызово родительского метода
        console.log("Meow!");
    }

    get ageInfo(){
        return this.age * 7;
    }

    set ageInfo(newAge){
        this.age = newAge;
    }
}

const cat = new Cat({
    name: 'Felix',
    age: 12,
    hasTail: true,
    color: 'Black'
})

class Component{
    constructor(selector) {
        this.$el= document.querySelector(selector);
    }

    hide(){
        this.$el.style.display = 'none';
    }

    show(){
        this.$el.style.display = 'block';
    }
}

class Box extends Component{
    constructor(options) {
        super(options.selector);
        this.$el.style.width = this.$el.style.height = options.size + 'px';
        this.$el.style.background = options.color;
    }
}

const box1 = new Box({
    selector: '#box1',
    size: 100,
    color: 'red'
})

const box2 = new Box({
    selector: '#box2',
    size: 150,
    color: 'green'
})

class Circle extends Component{

    constructor(props) {
        super(props.selector);
        this.$el.style.width = this.$el.style.height = props.size + 'px';
        this.$el.style.background = props.color;
        this.$el.style.borderRadius = '50%';
    }
}

const circle = new Circle({
    selector: '#circle1',
    size: 79,
    color: 'blue'
})

class Rectangle extends Box{

    constructor(options) {
        super(options);
        this.$el.style.width = options.size * 1.5 + 'px';
    }
}

const rectangle = new Rectangle({
    selector: '#rectangle1',
    size: 50,
    color: 'black'
})