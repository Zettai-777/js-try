/*
    Functions
    - Function declaration - объявляем функцию с именем, дальше можем её использовать в коде, к таким функциям можно обращаться
    в любом месте кода, typeof вернёт function, хотя на самом деле это объект (если смотреть через console.dir()), прототип
    которого наследуется от object

    - Function expression - сразу присваиваем функцию какой то переменной (можно именовать функцию или оставить анонимной),
    далее обращаемся к ней через имя переменной, к таким функциям можно обращаться только после их объявления

    - Анонимные функции - функции без имени, могут быть вызваны внутри встроенных методов (например setInterval)

    - Стрелочные функции - ялвляются аналогом лямбда-функций в java и по смыслу и по записи

    - Параметры по умолчанию

    - Замыкания - явление, когда из одной функции возвращается другая функция с сохранением некоторого контекста. При этом
    данные из более верхнего уровня являются константными для данных нижнего уровня, реализуя таким образом возможность
    создания приватности 
 */

//Function declaration
function greet(name) {
    console.log('Hello, ', name);
}

//Function expression
const bye = function b(name) {
    console.log('Goodbye, ' + name)
}

//Анонимные функции
function timer(){
    let counter = 0;
    const interval = setInterval(function () {
        console.log(counter++ % 2 === 0 ? 'Tik' : 'Tak');
        if (counter === 20){
            clearInterval(interval);
            console.log('Your time is come...Boooom!!');
        }
    }, 500);
}

greet('Zettai');
bye('Makenai');
// timer();

//Стрелочные функции
//Полный синтаксис
const greetingArrow = (name) => {
    console.log('Hello, ' + name);
}
//Сокращенная запись
const pow2 = () => console.log(`Квадрат числа ${num = prompt('Введите число:')} равен ${num**2}`);

greetingArrow('and goodbye!')
// pow2();

//Параметры по умолчанию
const sum = (a = parseInt(prompt()), b = parseInt(prompt())) => a + b
console.log(sum(17, 31));

//Оператор rest
function sumAll(...al){
    let sum = 0;
    for(let n of al){
        sum += n;
    }
    console.log(sum);
}
const sumAllNums = sumAll(1,2,4,5,3);

//Замыкания
function createPerson(name){
    return function (lastName){
        console.log(name + lastName)
    }
}

createPerson('Zet')('Tai');