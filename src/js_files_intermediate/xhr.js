/*
    XHR (XML Http Request)
    Нативный способ браузера работать через DOM с асинхронными http запросами (GET, POST, PATCH, PUT, DELETE).
    - Создаём экземпляр класса XMLHttpRequest;
    - Открываем соединение через open, куда первым параметром передаём метод, а вторым URL,
    по которому будет совершён запрос
    - Определяем действия, которые хотим делать с полученной/отправленной информацией, например для запроса
    GET можно определить метод onload экземпляра xhr и вывести полученные данные в консоль (при этом мы получаем
    информацию в строковом виде, чтобы получить объекты - парсим строку при помощи JSON.parse()
    - Обрабатываем возможные ошибки методом onerror экземпляра xhr
    - Отправляем данные на клиент методом send() экземпляра xhr
 */

const requestURL = 'https://jsonplaceholder.typicode.com/users'; //URL, с которым будем работать

function sendRequest(method, url, body = null){        //Параметр body необходим для POST запросов
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();                   //Создаём экземпляр xhr
        xhr.open(method, url);                              //Открываем сессию, передав тип запроса и URL
        xhr.responseType = 'json';                          //Указываем какой должен быть тип ответа
        xhr.setRequestHeader('Content-Type',          //Устанавливаем тип контента, чтобы браузер понимал, что
            'application/json');                      //ему отправляют json (для POST запроса)
        xhr.onload = () => {                                //Переопределяем метод onload, чтобы выводить полученные
            if(xhr.status >= 400){                          //Проверяем статус, приходящий от запроса,если больше
                reject(xhr.response);                       //400, то выкидываем ошибку (ошибки нетворка)
            }else {
                resolve(xhr.response);                      //данные в консоль и парсим их через JSON
            }
        }
        xhr.onerror = () => {                               //Обработка ошибок, которые могут произойти например
            console.log(xhr.response);                      //при некорректном URL
        }
        xhr.send(JSON.stringify(body));                     //Отправляем данные на клиент, для POST запроса необходимо
                                                            //вызвать метод stringify класса JSON, чтобы переопределить
                                                            //toString у передаваемого объекта
    })
}

// sendRequest('GET', requestURL)
//     .then(data => console.log(data))
//     .catch(err => console.error(err));

const user = {
    name: 'Zettai',
    credo: 'Makenai'
};

sendRequest('POST', requestURL, user)
    .then(data => console.log(data))
    .catch(err => console.error(err));