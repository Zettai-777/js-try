/*
    Асинхронность
    Event loop
    Promises - механизм работы с асинхронным кодом. Вызывается через new Promise() в качестве параметров которого передается
    callback функция - executor, принимающая в себя два параметра для работы с асинхронным кодом: resolve() и reject().
    Promise необходимо вернуть из функции, чтобы дальше можно было с ним работать. Помогает в ситуации callback help-а, когда
    необходимо управлять большим количеством асинхронного кода через callback-и. Бывают callback-и с большим уровнем вложенности
    и для работы с такими методами удобно использовать .then().
    Альтернативой в более новых версиях языка являются async функции  с находящимися внутри await методами и try|catch для отлова
    ошибок
    Ajax запросы - асинхронные запросы, которые JS может в фоновом режиме отправлять на сервер и без перезагрузки страницы получать
    эти данные в браузере
 */

let timeout = setTimeout(() => console.log('After timeout'), 2500); //задаёт время задержки, после которого
// могут быть выполнены какие то действия, асинхронная глобальная функция
clearTimeout(timeout); //очищает логику, которая была задана в setTimeout

let interval = setInterval(() => { //задаёт повторяющиеся действия через какой то интервал времени
    let counter = 0;
    console.log('Throw interval ' + counter++);
}, 1000);
clearInterval(interval);

const delaySuccess = (wait = 1000) => {
    const promise = new Promise((resolve, reject)=>{  //создаём Promise
        setTimeout(() =>{
            resolve()                                         //идём по ветке успешного выполнения запроса - resolve()
        }, wait);
    });
    return promise;                                           //возвращаем promise, чтобы с ним можно было дальше работать
}

const delayFailed = (wait = 1000) => {
    const promise = new Promise((resolve, reject) =>{ //создаём Promise
        setTimeout(() =>{
            reject('Something going wrong, please try again.') //идём по ветке провального выполнения запроса
            // - reject() и даём описание ошибке
        }, wait);
    });
    return promise;                                         //возвращаем promise, чтобы с ним можно было дальше работать
}

delaySuccess(2500)
    .then(() => console.log('After 2,5 seconds'))       //then позволяет работать с результатом выполненной в Promise функции,
    // принимает внуть себя callback(), в котором описывается что нужно сделать после выполнения функции
    .catch(err => console.error('Error: ', err))         //catch позволяет отлавливать ошибки, происходящие во время выполнения
    // асинхонного кода (случай reject) и выводить описание ошибки, переданной в reject внутри своей callback()
    .finally(() => console.info('Stopped after success method')); //выполняется после выполнения двух предыдущих
    // блоков и в своей callback() выполняет действия вне зависимости от успеха или неудачи выполнения вызывающей функции

delayFailed(5000)
    .then(()=> console.log('After 5 seconds'))          //не будет вызван, так как произошла ошибка
    .catch(err => console.error('Error: ', err))          //описание блока с ошибкой
    .finally(() => console.log('Stopped after failed method')); //выполняется после предыдущих блоков в любом случае


// Альтернатива для работы с асинхронным кодом вместо .then() и callback-ов
const getData = () => new Promise(resolve => resolve([
    1, 2, 3, 5, 8, 13
]));

// getData()
//     .then(data => console.log(data));

async function asyncExampleSuccess(){         //с помощью async делаем функцию асинхронной, теперь можем внутри неё использовать await
    await delaySuccess(6000);            //с помошью await можем указать, что нужно дождаться выполнения функции, помеченной этим оператором
    const data = await getData();             //получаем результат выполнения неасинхронной функции
    console.log('Data: ', data);
}

async function asyncExampleFailed() {              //с помощью async делаем функцию асинхронной, теперь можем внутри неё использовать await
    try{                                           //пробуем выполнить действие
        await delayFailed(7000);              //действия в блоке не выполнятся, так как мы передали функцию с reject-ом
        const data = await getData();
        console.log('Data: ', data);
    }catch (e){
        console.error(e);                          //обрабатываем ошибку
    }finally {
        console.log('Async method stopped');
    }
}

asyncExampleSuccess();
asyncExampleFailed();