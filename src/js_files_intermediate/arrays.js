/*
    Arrays
 */
//Обычный массив
const people = [
    {name: 'Misha', age: 29, cash: 45000},
    {name: 'Ivan', age: 29, cash: 49000},
    {name: 'Sonya', age: 19, cash: 15000},
    {name: 'Victor', age: 28, cash: 52300},
    {name: 'Nastya', age: 29, cash: 51050},
    {name: 'Pasha', age: 30, cash: 47500},
]

//Цикл for (ES5 синтаксис, работает на большинстве браузеров)
for (let i = 0; i < people.length; i++){
    console.log(people[i]);
}
console.log("----".repeat(10));

//Цикл while
let count = 0;
while (count < people.length){
    console.log(people[count++]);
}
console.log("----".repeat(10));

//Цикл for-of (ES6 синтаксис, работает не на всех браузерах)
for(let p of people){
    console.log(p);
}
console.log("----".repeat(10));


//Arrays high order functions

//ForEach (первый параметр - объект, второй - некоторый индекс, третий - сам массив объектов)
// people.forEach((p, index, pArray) => {
//     console.log(p);
//     console.log(index);
//     console.log(pArray);
// });

//Map (первый параметр - объект, второй - некоторый индекс, третий - сам массив объектов)
//Возращает новый массив такого же размера, что и входящий, но с преобразованными внутри map данными
// const newPeople = people.map(p => {
//     return `${p.name} (${p.age} ${p.cash > 40000 ? p.cash : ''})`;
// });
// console.log(newPeople);

//Filter - фильтрация исходного массива по какому то условию, принимает те же три параметра, возвращает новый массив
const adults = people.filter( p => p.age > 28);
console.log(adults);

//Reduce - необходим для получения некого конечного значения после итерации по массиву
//Принимает в себя два параметра: callback(total, p) и начальное значение total
const sumOfCash = people.reduce((total, p) => {
    return total + p.cash;
}, initValue = 0);
console.log(`Amount of people's cash: ${sumOfCash}`);

//Find - служит для поиска нужного элемента по условию, принимает в параметры callback, в который передаётся итерируемый объект
const person = people.find(p => p.name === 'Sonya');
console.log(person);

//FindIndex
const personIndex = people.findIndex(p=> p.age === 29);
console.log(personIndex);
console.log(people[personIndex]);

//===============================
//Chain
const newPeople = people
    .filter(p => p.cash > 48000)
    .map(p => {
        return {
            info: `Name: ${p.name.toUpperCase()}\nAge: ${p.age}`,
            cash: p.cash
        }
    })
console.log(newPeople);