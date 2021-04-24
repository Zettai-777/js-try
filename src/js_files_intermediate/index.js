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

/*
    Замыкания.
    Парадигма, в которой одна функция вызывает внутри себя другую функцию. При этом, если в родительскую функцию передать
    некоторый параметр, который будет далее использован в дочерней функции, то этот параметр будет замкнут в результате
    вывода дочерней функции.
 */

function createCalcFun(n){
    return function (){
        console.log(1000 * n);
    }
}

let calcFun = createCalcFun(17);
console.log(calcFun());

function createMultiplier(base){
    return function multiplyOn(num){
        return base * num;
    }
}

const multSeventeen = createMultiplier(17);
console.log(multSeventeen(2));

const user1 = {
    name: 'Alex',
    nick: 'Dominator2000',
    age: 21
};

const user2 = {
    name: 'Sonya',
    nick: 'Sophyetta_the_prettiest',
    age: 43
};



function logUser(){
    console.group('User info:');
    console.log(`Name: ${this.name}\nNickname: ${this.nick}\nAge: ${this.age}`);
    console.groupEnd();
}

function bind(context, func){
    return function(...args){
        func.apply(context, args);
    }
}

res = bind(user1, logUser);
res();

/*
    Асинхронность.
    Реализуется при помощи функции из API брузера - setTimeout() глобального объекта window.
    В качестве параметров принимает функцию (анонимную или уже существующую), в которой будет
    прописана какая то логика и количество милисекунд, через кооторые логика будет выполнена.
    Асинхронность достигается за счёт EventLoop - итератора, который проходит по Callback Queue в поисках асинхронных
    функций, которые выполнили свой код.
    Концепт, при котором интерпритатор при проходе по коду перемещает функции в Call Stack и разбирает их внутри стека.
    В том случае, если он натыкается на setTimeout (браузерный API), или любую другую асинхронную функцию, он убирает
    setTimeout из стека, но регистрирует функцию, которая передана в setTimeout  в очереди и ждёт, пока браузер выполнит
    код внутри функции, возвращая её из Callback Queue в Call Stack в качестве анонимной функции.
    В случае setTimeout, даже если поставить время ожидания 0 мс, всё-равно выполнение переданной функции осуществится
    после выполнения синхронных функций.

 */

// console.log('Usual function');
// setTimeout(function (){
//     console.log('After 4 seconds');
// }, 0);
// console.log('Instant after setTimeout');
// console.log('Instant after setTimeout1');
// console.log('Instant after setTimeout2');
// console.log('Instant after setTimeout3');

/*
    Promise.
    Используются для облегчения работы с асинхронными операциями в том случае, когда логика асинхронных вызовов реализуется
    через вложенные callback-и.
 */

console.log('Request data...'); //эмуляция запроса к серверу
// setTimeout(()=>{
//     console.log('Preparing data...'); //эмуляция ответа сервера (2 сек)
//
//
//
//     const backendData = { //эмуляция сформированных на бэке данных
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }
//
//     setTimeout(() => { //эмуляция переданных с сервера данных во вложенной функции
//         backendData.modified = true;
//         console.log('Data received...', backendData);
//     }, 2000);
// }, 2000);

const promise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        console.log('Preparing data...'); //эмуляция ответа сервера (2 сек)
        const backendData = { //эмуляция сформированных на бэке данных
            server: 'aws',
            port: 2000,
            status: 'working'
        }
        resolve(backendData);
    }, 2000);
})

promise.then((data) => {
    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true;
            resolve(data);
            // console.log('Data received', data);
        });
    })
    p2.then(clientData => {
            console.log('Data received', clientData);
        }
    )
})
