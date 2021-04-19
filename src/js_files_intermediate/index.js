/*
    Прототип - определённый объект, присутствующий у родительских элементов.
    В JS все созданные переменные по факту являются объектами. Объекты содержат в себе ссылку на свой прототип с иерархией
    наследования, реализованной в DOM через вложенность. Базовым объектом является Object.
    Примерно тоже самое, что и наследование классов в Java.
 */

const person = {
    name: 'Maxim',
    age: 25,
    greet: function () {
        console.log('greet')
    }
}

const person1 = new Object(
    {
        name: 'Michail',
        age: 29,
        greet: function () {
            console.log('hello, friend!')
        }
    }
)

const cat = new Object({
    name: 'Tihon',
    age: 13,
    type: 'cat'
});

Object.prototype.sayHello = function (){ //задаём протипу нашего объекта новый метод, который в дальнейшем можно будет
    //использовать в объектах, унаслелованных от Object
    console.log('Hello!');
}

const ivan = Object.create(person); //создаём объект Ivan на основе прототипа person через метод Object
ivan.name = 'Ivan';

const str = 'I am string';
const str1 = new String('I am string' );

/*
    Контекст (this)
    Концепция заключается в том, что при использовании ключевого слова this мы передаём контекст текущего объекта.
    - Для того, чтобы поменять держателя контекста в функции, можно воспользоваться её встроенным методом bind(),
    в параметры которого передаётся новый объект, чей контекст будет использован, например window. При этом bind вернёт
    новую функцию. На самом верхнем уровне в консоли DOM this === window.
    - Метод call задаёт контекст функции и сразу её вызывает, не возвращая новую функцию
    - Метод apply делает тоже, что и call, но параметры передаются через список
 */
function hello(){
    console.log('Hello', this);
}

const person2 = {
    name: 'Victor',
    surName: 'Chirkov',
    age: 28,
    sayHello: hello,
    sayHelloWindow: hello.bind(document), //привязывает к фукнции hello контекст объекта document
    logInfo: function (job, phone){
        console.group(`${this.name} info:`) //создаём начало группы для console.log
        console.log(`Name: ${this.name}\nSurname: ${this.surName}\nAge: ${this.age}`)
        console.log(`Job: ${job}\nPhone: ${phone}`);
        console.groupEnd(); //задаём конец группы для console.log
    }
}

const anon = {
    name: 'UNKNOWN',
    surName: 'UNKNOWN',
    age: '12',
    // logAnonInfo: person2.logInfo
}
//bind
const fnAnonInfoLog = person2.logInfo.bind(anon, 'HR'); //передаём параметр в метод через параметры bind
fnAnonInfoLog('8-969-123-54-78'); //передаём параметр в метод через параметры самого метода

//call
person2.logInfo.call(anon, 'IT', '587-89-98'); //делает тоже, что и bind, но не возращает результат, а сразу вызывает функцию

//apply
person2.logInfo.apply(anon, ['QA','985-12-124']);//делает тоже самое, что и call, но параметры передаются в списке

const array = [1, 2, 3, 4, 5];

function multBy(n, array){
    return array.map((el) => el * n);
}

Array.prototype.multByWithProt = function (n){ //добавляем в наш массив метод умножения каждого элемента массива на число
    // через изменение прототипа Array.
    return this.map(num => num * n);
}

console.log(array.multByWithProt(5));