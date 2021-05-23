/*
    Spread - ключевое слово в JS, при помощи которого осуществляется развёртывание какого либо множества.
    - Синтаксис ...
    - Позволяет выполнять копирование одного множество в другое (например в пустой список через ...old_array)
    и конкатенирование двух списков через [...arr1,...arr2];
    - Позволяет выполнять копирование одного объекта в другой, но разворачивать копируемый объект нужно внутри
    пустого объекта, т.е. внутри {}. Также можно конкатенировать два объекта, объединяя их свойства, при этом
    в случае совпадения свойств в двух объектов в живых останется свойство последнего по порядку объекта
 */

const russianTowns = ['Moscow', 'Saint-Petersburg', 'Kazan', 'Novgorod'];
const europeTowns = ['Berlin', 'Prague', 'Paris'];

const rusTownWithPopulation = {
    Moscow: 20,
    SaintPetersburg: 8,
    Kazan: 3
};

const euroTownWithPopulation = {
    Moscow: -1,
    Berlin: 10,
    Prague: 3,
    Paris: 2,
};

//Spread
console.log(...russianTowns);
console.log(...europeTowns);

//Клонирование массивов
const allCities = [...europeTowns, 'London', ...russianTowns]; //развернули в пустой массив два массива + добавили ещё один элемент
const allCities1 = europeTowns.concat(russianTowns);    //тоже самое через методы массивов
console.log(allCities);
console.log(allCities1);

//Клонирование объекта
console.log(rusTownWithPopulation);
console.log({...rusTownWithPopulation});
//Конкатенирование двух объектов через spread
console.log({...rusTownWithPopulation, ...euroTownWithPopulation});


//Practice
//Поиск максимального элемента в массиве
console.log(Math.max(5, 37, 52, 17));
const nums = [5, 32, 12, 435, 21, 1325];
console.log(Math.max(...nums));         //передаём в Math.max массив с помощью spread
console.log(Math.max.apply(null, nums)) //Так делали до spread
//Работа с dom элементами (превращение их в массив)
// const divs = document.querySelectorAll('div');
// console.log(divs, Array.isArray(divs));
// const nodes = [...divs];
// console.log(nodes, Array.isArray(nodes));

/*
    Rest - имеет тот же синтаксис, что и spread, но выполняет другую деятельность (отличается областью применения).
    Rest указывается в конце переданных в функцию параметров и включает в себя те параметры, которые не были явно указаны
    при объявлении функции или помогает при деструктуризации
 */

//Работа со множеством входных параметров
function sum(a, b, ...rest) {  //здесь ...name - это rest и он включает в себя те параметры, которые будут переданы, но не
    //поместятся в именованные параметры
    console.log(rest);
    return a + b + rest.reduce((a, i) => a + i, 0);
}

const numbers = [1, 2, 3, 4, 5, 6];

console.log(sum(...numbers)); //здесь ... - это spread - т.е. мы разворачиваем массив в список параметров и используем
// из этого списка первые два под именнованные параметры

//Деструктуризация массива
const a = numbers[0];
const b = numbers[1];
const [c, d, ...other] = numbers; //Деструктуризация массива, такая запись идентична двум предыдушим строчкам
console.log(`a = ${a}, b = ${b}, c = ${c}, d = ${d}, other: ${other}`);

//Деструктуризация объекта
const man = {
    name: 'Max',
    nick: 'Mad',
    age: 41,
    city: 'NeverMore'
}

const {name, nick,...info} = man;
console.log(nick, name, info);

/*
    Деструктуризация
    При деструктуризации можно задавать значения по умолчанию через = и давать алиасы через :, а также деструктуризировать
    вложенные объекты, также через :
 */

function calculatorValues(x, y){
    return [
      x + y,
      x - y,
      x / 0,
      x * y,
      x / y
    ];
}

const res = calculatorValues(17, 2);
const [summa, difference, ,multiply,division] = res; //Деструктуризация массива (мы не используем деление на 0, поэтому оставляем просто ,
console.log('Sum: ', summa,'\nSub: ', difference,'\nMult: ', multiply, '\nDiv: ', division);

//Objects

const p = {
    name: 'Max',
    age: 23,
    address: {
        country: 'Russia',
        city: 'Saint-Petersburg'
    }
}

const {
    name: firstName,
    car = `${firstName} hasn't car`,
    address: {city: town, country}
} = p;
console.log(firstName, car, town, country);

function logPerson({name, age}){
    console.log(name + ' ' + age);
}

logPerson(p);