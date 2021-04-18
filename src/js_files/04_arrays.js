/*
    Массивы
    - могут хранить в себе разные типы данных (ибо нестрогая типизация)
    - нет ограничений по размеру при создании (как List в Java)

 */

const cars = ['Mazda','Ford','BMV','Mersedes'];
const people = [
    {name: 'Misha', cash: 1200},
    {name: 'Nastya', cash: 1500},
    {name: 'Ivan', cash: 1750}
]
const fib = [1, 2, 3, 5, 8, 13, '21'];

cars.push('Lada'); // push является аналогом add в Java (добавление в конец списка)
cars.unshift('Toyota'); // unshift добавляет элемент в начало списка
console.log(cars);
let fItem = cars.shift(); // метод удаления из начала списка элемента и возвращающий этот элемент
let lItem = cars.pop(); //метод удаления из конца списка элемента и возвращаюющий его
console.log(cars);
console.log(fItem);
console.log(lItem);
cars.reverse(); //перераспределяет элементы массива в обратном начальному порядке
console.log(cars);
console.log(cars.indexOf('Ford')); //поиск индекса элемента (если нет - возращает -1), работает с примитивами

const index = people.findIndex(function (person){ // возвращает индекс элемента из списка с объектами по заданному условию
    return person.cash === 1200;
});
const person = people.find(person => person.cash === 1500); // возвращает элемент из списка с объектами по заданному условию, если такого нет - undefined
console.log(index);
console.log(people[index]);
console.log(person);

console.log(cars.includes('Misha')); // возращает булевое значение, говорящее о том содержится ли элемент в списке или нет

const sqrt = x => Math.sqrt(x);
const upperCars = cars.map(car => car.toUpperCase()); // map применяется к каждому элементу списка и выполняет над ним указанное действие, возвращает новый массив
const pow2Fib = fib.map(el => el**2).map(el => sqrt(el));
console.log(upperCars);
console.log(pow2Fib);

const pow3Fib = fib.map(el => Math.pow(el, 3));
console.log(pow3Fib);
console.log(pow3Fib.filter( num => { // фильтрация элементов по условию, возращает новый массив
    return num < 1000;
}));
let res = people
    .filter(person => person.cash < 1700)                       //фильтруем из списка элементы с кэшем меньше 1700
    .reduce((acc, person) => {    //выполняем действия на основании reduce
    acc += person.cash;
    return acc;                                                //основание reduce
}, 0);
console.log(res);