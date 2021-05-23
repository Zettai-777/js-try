/*
    Maps.
    Структура данных, содержащая коллекцию ключей и значений. В JS представление объекта схоже с map.
    - Но в отличие от объектов можно обращаться к полям через различные методы, в качестве ключей можно
    указывать различные типы данных, в том числе и объекты, NaN.
    - У класса Map также определён Iterator, для итерированию по map используем метод map.entries()
    - Map также обеспечивает уникальность ключей

 */
//Стандартная запись объекта
const obj = {
    name: 'Anon',
    age: 12,
    job: 'Programmer'
}
//Запись объекта через массив массивов
const entries = [
    ['name', 'Zet'],
    ['age', 32],
    ['job', 'FullStack']
]

//Object.entries(obj) переводит стандартную запись объекта в вид массив массивов, где первый элемент внутреннего массива-
//название свойства объекта, а второй элемент - его значение
console.log(Object.entries(obj));
//Object.fromEntries(entries) переводит объект в виде массива массивов в стандартную запись
console.log(Object.fromEntries(entries));

//Создание map через конструктор встроенного класса Map. В параметры конструктора можно передавать начальные значения
//в виде массива массивов
const map = new Map(entries);

map
    .set('newField', 52)            //задаём новое значение в map (set возвращает новую map?)
    .set(obj, 'Value of object')    //задаём новое значение через ключ, являющийся объектом
    .set(NaN, 'Not a Number')
    .set('newField', 17);
console.log(map);
console.log(map.get('job'));        //получение значения свойства по ключу
console.log(map.delete(NaN));       //возращает boolean
console.log(map.has(NaN));          //проверка имеется ли entry в map через has
console.log(map.size);              //возвращает количество entry
// map.clear();                        //удаление всех элементов из map
console.log(map.size);
console.log('=============='.repeat(10));
//Встроенные в map методы
for(let entry of map.entries()){
    console.log(entry);             //entry представляет собой массив из двух элементов
}

for(let [key,value] of map){        //можно итерироваться сразу по map и через массив ключ и значение
    console.log(key,value);
}
console.log('=============='.repeat(10));

for(let val of map.values()){       //map.values() возвращает массив значение
    console.log(val);
}
console.log('=============='.repeat(10));

for(let key of map.keys()){         //map.keys() возвращает массив ключей
    console.log(key);
}
console.log('=============='.repeat(10));

map.forEach((k,v, m) =>{
    console.log(v, k);
});
console.log('=============='.repeat(10));

//Преобразование map в array
const array = [...map];             //преобразование map в array с помощью оператора spread(...) и разворачивания map
console.log(array);
const array1 = Array.from(map);     //преобразование map в array с помощью Array.from(map)
console.log(array1);
const objFromMap = Object.fromEntries(map.entries()); //получение объекта из entriesSet map
console.log(objFromMap);

//Практический пример
const users = [
    {name: 'Elena'},
    {name: 'Sasha'},
    {name: 'Ira'}
]

const visits = new Map();

visits
    .set(users[0],new Date())
    .set(users[1], new Date(new Date().getTime() + 1000 * 60))
    .set(users[2], new Date(new Date().getTime() + 5000 * 60));

function lastVisit(user){
    return visits.get(user);
}

console.log(lastVisit(users[0]));