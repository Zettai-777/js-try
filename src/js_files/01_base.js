/*
     1) Variables
     Раньше использовалась var (variable)
     По новым стандартам const (constanta - неизменяемы, соотвественно необходимо задавать значение,
     как у final переменной) и let (так же как var изменяемы), предпочтительны const
     camelCase, ';' - в конце опциально, могут начинаться с _ или $
*/

var userName = 'Zettai';
const firstName = 'Michail';
const lastName = 'Bayanga';
const age = 29;
let isProgrammer = true;
// userName = 'Unknown';

/*
   2) Мутирование
   Позволительны и двойные и одинарные кавычки (предпочтительно)
   Конкатенация при выводе строковых и чисел, как в Java
*/

console.log('Имя: ' + firstName + '\nФамилия: ' + lastName + '\nВозраст: ' + age);

// alert(userName); // функция, принадлежащая браузеру, выводит окно с сообщением (нет в самом JS)
// const profession = prompt('Введите вашу профессию'); // функция ввода данных через окно
// isProgrammer = profession === 'Programmer';
// console.log(userName + (isProgrammer == true ? ' is programmer' : ' still not programmer'));

// 3)Операторы (те же, что у java)
const curYear = 2021;
const birthYear = 1991;
const floatNum = 1 / 3;
let c;
console.log(2 % 3)

/*
    4)Примитивные типы данных
    Определить тип можно при помощи метода typeof <variable>
    - string
    - integer
    - boolean
    - undefined (например когда переменная не инициализирована)
    - null (но type of выведет object, баг системы)
 */
console.log(age + ' Тип переменной age: ' + typeof age);
console.log(firstName + ' Тип переменной firstName: ' + typeof firstName);
console.log(isProgrammer + ' Тип переменной isProgrammer: ' + typeof isProgrammer);
console.log(floatNum + ' Тип переменной floatNum: ' + typeof floatNum);
console.log(c + ' Тип переменной c: ' + typeof c);


/*
    5) Приоритет операторов
    Чтобы быстро гуглить инфу по JS в поиске сначала вводим mdn (mozilla developer network, а потом суть вопроса)
    == -  проверка по значению, то есть если мы сравниваем 17 и "17" будет true, ибо будет каст к одному типу
    === - проверка и по значению, и по типу данных
    Тернарный оператор isGood = prompt() == 'yes' ? true : false можно заменить на  isGood = prompt() === 'yes'
 */

const isFullAge = curYear - birthYear >= age;
const n1 = 17;
const n2 = '17';

console.log(n1 === n2); // вернёт false
console.log(n1 == n2); // вернёт true

// let isGood = prompt() === 'yes' ? 1 : 2;
// isReady = prompt() === 'true';
// console.log(isReady ? 'Success' : 'Fail');
// console.log(isReady)

/*
    6) Функции
    Объявляются через ключевое слово function. Не нужно писать тип возвращаемого значения или тип параметров.
 */
function calculateAge(birthDay) {
    return 2021 - birthDay;
}

console.log("Age: " + (calculateAge(1991) - 1));

/*
    Массивы
    Объявляются через const mas = [] или new Array(), предпочтительно []
 */

const cats = ['Tihon', 'Felix', 'Simba', 'Kot', 1, 323, true];
cats[8] = 'asd';
console.log(cats);
const dogs = new Array();
dogs.push('Eva');
dogs.push('Bona');
console.log(dogs);

/*
    Циклы
    1) for(let i = 0; i < array.length; i++){}
    2) for(let el of array){} - аналог foreach в Java
    3) while(){}
 */
// for(let i = 0; i < cats.length; i++){
//     console.log(cats[i]);
// }
//
// for(let cat of cats){
//     console.log(cat);
// }
let num = cats.length;
while (num-- > 0){
    console.log(cats[-(num-1)]);
}

/*
    Объекты
    Являются группой некоторых общих полей для какой то сущности.
    Объявление через const obj = new Object({values}) - нежелательный способ
    или через const obj = {}, внутри фигурных скобок пары ключ-значение, являющиеся полями.
    Методы также задаются через поля. К полям можно обращаться через "." => obj.field или
    через obj["field_name"]

 */

const person = {
    name : 'Zhan-Michel',
    surName : 'Bayanga',
    age : 29,
    birthYear : 1991,
    languages : ['RU','JA','EN'],
    isMarriage : false,
    greeting : function (){
        console.log('Hate you all!')},
    function(){
        console.log('Empty func')
    },
    function1(){
        console.log('Empty func1')
    },
    know(){
        console.log('How - You never know')
    }
}
person.isMarriage = true;
person.isProgrammer = true;
console.log(person.name + " " + person.surName);
console.log("Born in " + person.birthYear + " , now he is " + person.age + " years old");
console.log("In this moment he is" + (person.isMarriage ? " marriage" : "n't marriage"));
console.log("He knows next languages:")
for(let lang of person.languages ){
    console.log(lang);
}
person.greeting();
person.function();
person.function1();
person.know();
console.log(person.isProgrammer);