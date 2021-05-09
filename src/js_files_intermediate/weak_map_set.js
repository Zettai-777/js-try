/*
    Weak Map - ассоциативный словарь, позволяющий избегать утечек информации в JS
    - Если мы создаём объект в JS и после этого присваиваем ему значение null, то он обнуляется и может быть удалён
    сборщиком мусора
    - Если этот объект передать в массив (список), то в списке будет храниться не ссылка на объект, а сам объект, поэтому
    его обнуление не повлияет на массив
    - Если использовать этот же объект, как ключ в обычной map, то уже нельзя будет получить доступ к значению этого entry,
    но при этом в памяти будет храниться значение по этому ключу
    - В Weak Map при удаление объекта, являющегося ключом одновременно удаляется и значение по этому ключу, что экономит
    память
    - Weak Map является ограниченным вариантом обычного map со следующими ограничениями:
        - ключами могут быть только объекты
        - есть только методы get, set, delete и has
        - нельзя узнать размер weak map
    - Weak Set также позволяет хранить в себе только объекты и также при обнуление объекта сразу удаляет их из себя, в
    отличии от обычного set, имеет методы add, has и delete
 */

let obj = {prop: 'Smtng'};
const array = [obj];

console.log(obj);
console.log(array[0]);

const myMap = new Map([
    [obj, 'Information']
]);


const weakMap = new WeakMap([
    [obj, 'Information']
]);

obj = null;

console.log('Info from map: ' + myMap.get(obj));

console.log('Info from weak map: ' + weakMap.get(obj));
console.log(weakMap.has(obj));
console.log(weakMap.get(obj));
console.log(weakMap);
console.log(weakMap.has(obj));

//Practice
const cache = new WeakMap();
const cache1 = new Map();

function cacheUser(user){
    if(!cache.has(user)){
        cache.set(user, Date.now());
    }
    return cache.get(user);
}

function cache1User(user){
    if(!cache1.has(user)){
        cache1.set(user, Date.now());
    }
    return cache1.get(user);
}

let roma = {name: 'Roman'};
let dasha = {name: 'Daria'};

cacheUser(roma);
cacheUser(dasha);

cache1User(roma);
cache1User(dasha);

dasha = null;

console.log(cache.has(roma));
console.log(cache.has(dasha));
console.log(cache1.has(roma));
console.log(cache1.has(dasha));


//Weak Set
const persons = [
    {name: '1'},
    {name: '2'},
    {name: '3'}
]

const visits = new WeakSet();
visits.add(persons[0]).add(persons[1]);

persons.splice(1,1);

console.log('Has weak set person: ', visits.has(persons[0]));
console.log('Has weak set person: ', visits.has(persons[1]));