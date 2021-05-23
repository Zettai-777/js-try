/*
    Fetch() - современный браузерный API для работы с http запросами.
    - Возвращает Promise
    - По умолчанию работает с методом GET
    - Со стороны клиента
 */
const requestURL = 'https://jsonplaceholder.typicode.com/users'; //URL, с которым будем работать

function sendRequest(method, url, body = null){
    const headers = {
        'Content-Type' : 'application/json'
    }
    return fetch(url,{                                  //вызываем нативный метод fetch с переданным в него URL
        method: method,                                     //для метода POST передаём тип метода, тело с переопределённым
        body: JSON.stringify(body),                         //toString() и заголовки с типом контента
        headers: headers
    }).then(response => {
        if(response.ok){
            return response.json();                         //получаем из promise-а ответ в виде класса Response с полезной
                                                            //инфой, у которого вызываем метод text|json для получения переданных данных
        }else {
            return response.json()                          //обрабатываем ошибки
                .then(err => {
                    const e = new Error('Something going wrong.')
                    e.data = err;
                    throw e;
                })
        }

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