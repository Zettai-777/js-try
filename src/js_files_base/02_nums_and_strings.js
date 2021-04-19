/*
    Класс Number
    -integer (17)
    -float   (17.213)
    -pow     (14e2)
    -Positive and Negative Infinities (например 2/0 можно проверить, является ли число конечным через isFinite())
    -NaN (not a number) (например 2/undefined, можно проверить, является ли NaN через метод isNaN())
    Класс Number содержит разные поля, относящиеся к числам
    -из строкового представления можно извлечь необходимуй тип через parseInt() и parseFloat() соотвественно

 */

console.log("MAX_VALUE: ", Number.MAX_VALUE);
console.log("MIN_VALUE: ", Number.MIN_VALUE);
console.log("MAX_SAFE_INTEGER: ", Number.MAX_SAFE_INTEGER);
console.log("Math.pow 53 - 1: ", Math.pow(2, 53)-1);
const stringInt = '17';
const stringFloat = '17.17';
console.log('Сумма строковой 17 и числовой: ', Number.parseInt(stringInt) + 17);
console.log('Сумма строковой 17.17 и числовой: ', Number.parseFloat(stringFloat) + 17.17);
console.log('При работе с float так же присутствует проблема с точностью 0.1 + 0.2 = : ', 0.1 + 0.2);
console.log('Решение 1 - обрезать количество выводимых порядков через toFixed(n): ', parseFloat((0.1 + 0.2).toFixed(3)));

/*
    BigInt
    Класс, предназначенный для работы с числами, большими чем MAX_SAFE_INTEGER
    - получается через добавления "n" в конце числа - 17345n
    - работает только с другими BigInt, иначе получаем 02_nums_and_strings.js:33 Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
 */
console.log('MAX_SAFE_INTEGER: ',Number.MAX_SAFE_INTEGER);
console.log('Тип числа 17345n:', typeof 17345n);
console.log(parseInt(1345n + 123n));


/*
    Strings
    - считается примитивом?, но имеет конструктор и другие свойства класса
    - синтаксис `один плюс один равно ${var}`, где const var = 'два', является аналогом String.format в java
    - так же синтаксис `` позволяет передавать строку в кавычках в качестве аргумента? (printPersonInfo`Имя: ${personName}, возраст: ${personAge}`)
    функции, превращаясь в результате в массив строк, разбитых ${} выражениями
   
 */
const s = 'Sparta!'
console.log(`This is ${s}`);
// console.log(1345n + 123);

function printPersonInfo(str, name, age){
    console.log(str);
    if(age < 30){
        console.log('Почти половина пути, соберись!')
    }
    return `${str[0]}${name}${str[1]}${age}`;
}
const personName = prompt('Введите Ваше имя');
const personAge = prompt('Введите Ваш возраст');
const info = printPersonInfo`Имя: ${personName}, возраст: ${personAge}`;
console.log(info);
