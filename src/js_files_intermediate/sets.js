/*
    Set. Структура данных, обеспечивающая уникальность элементов своей коллекции.
    - Обладает теми же методами, что и map, в том числе keys, entries для обратной совместимости с map
 */

const set = new Set([1, 2, 3, 3, 4, 5, 5 ,6]);

//Методы класса Set
set.add(20).add(15).add(17).add(17);        //добавление новых элементов через add
console.log(set);
console.log(set.has(24));
console.log(set.size);
// set.delete(1);
// console.log(set.size);
// set.clear();
// console.log(set.size);

for(let n of set)
    console.log(n);

function uniqValues(array){
    return Array.from(new Set(array));
}

console.log(uniqValues([1,2,2,2,4,5,4,65,6,8]))