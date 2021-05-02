/*
    Generators.
    Некоторые функции, которые могут последовательно выдавать результаты своей работы.
    - Синтаксис: ставим * перед или после ключевого слова function (предпочтительнее после), внутри функции поочерёдно
    выводим следующее значение при помощи ключевого слова yield
    - Цикл for-of (for(let k of array)) может итерироваться по объектам, у которых ключ итерирования (k) определён как
    Symbol.iterator


 */

//Пример генератора char-ов
function* strGenerator(){
    yield 'H';
    yield 'e';
    yield 'l';
    yield 'l';
    yield 'o';
}
const  str = strGenerator();

//Пример генератора int-ов
function* numberGenerator(n = 10){
    for(let i = 0; i < n; i++){
        yield i;
    }
}
const num = numberGenerator(7);

//Создаём свой генератор без использования нативных возможностей
const iterator = {
    [Symbol.iterator](n = 10){              //[Symbol.iterator] -  поле iterator специального класса Symbol из JS,
                                                    //отвечаюещего за символы, позволяет итерироваться по iterator
        let i = 0;
        return {
            next(){
                if(i < n){
                    return {value: ++i, done: false};
                }
                return {value: undefined, done: true};
            }
        }
    }
}
//В данном генераторе также есть поле Symbol.iterator, установленное по умолчанию
function* iterator1(n = 10){
    for(let i = 0; i < n; i++){
        yield i;
    }
}

//Цикл for - of
for(let k of iterator1(6)){
    console.log(k);
}