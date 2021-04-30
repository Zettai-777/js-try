/*
    Async and await. Fetch.
    - Fetch() в браузере - это нативный аналог ajax из браузера, который делает асинхронный запрос и возвращает
    promise.
    - Те функции, которые применяют внутри применяют оператор await должны быть асинхронными. Этого можно добиться
    если дописать ключевое слово async на верхнеуровневую функцию. При этом внутри данной функции вместо обработки
    результатов promise-ов через then | catch мы можем дописать перед функцией, возвращающей promise оператор await
    и это будет равносильно обработке promise-а
    - По факту async-await является синтаксическим сахаром для лучшей читабельности кода. По сути Babel(транскомпилятор
    JS) при нахождение функции с await внутри async функции оборачивает внутренние функции в promise-ы
    - Функция с async также вовзращает promise
 */

// const delay = ms => {
//     return new Promise(resolve => {
//             setTimeout(() => {
//                 resolve()
//             }, ms)
//         }
//     )
// }

//Функция, реализующая задержку с указанным временем
const delay1 = ms => {
    return new Promise(resolve => setTimeout(() => resolve(), ms));
}
//Адрес, где лежит необходимая информация
const url = 'https://jsonplaceholder.typicode.com/todos';
//Функция, обращающася к указанному ресурсу через заданное время и вовзращающая json
function fetchTodos(){
    console.log('FetchTodos started...')
    return delay1(2000)
        .then(()=> fetch(url))                  // по переданному в fetch url получаем с сервера ответ в виде json
        .then(response => response.json())      //json() является api метода fetch()
}

// delay1(ms = 3000)
//     .then(()=> console.log(`After ${ms/1000} seconds`));

fetchTodos()
    .then(data => console.log('Data from fetchTodos: ' + data))
    .catch(error => console.error('Error: ' + error))
    .finally(() => console.log('FetchTodos finished\n' + ('====='.repeat(25))));

//async and await
async function fetchAsyncTodos(){
    console.log("Fetch asyncTodos started...");
    try {
        await delay1(5000); //await не даёт продолжить выполнение кода дальше, пока promise не даст результат
        const response = await fetch(url); //поскольку fetch возвращает некоторый результат, который дальше будет использован
        //необходимо присвоить этот результат некоторой переменной
        const data = await response.json();
        console.log('Data from fetchAsyncTodos: ' + data);
    }catch (error){
        console.error('Error: ' + error);
    }finally {
        console.log('Fetch asyncTodos finished\n' + ('====='.repeat(25)));
    }

}

fetchAsyncTodos();