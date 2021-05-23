/*
    Dependency Inversion Principle
    Своими словами: абстракция не должна зависеть от конкретной реализации, реализации должны зависеть от абстракций.
    Модули верхнего уровня не должны зависить от модулей нижнего уровня, всё должно зависеть от абстракций.
 */

class Fetch{
    request(){
        // return fetch(url).then( r => r.json())
        return Promise.resolve('data from fetch');
    }
}

class LocalStorage{
    get(){
        const dataFromLS = 'data from local storage';
        // return localStorage.getItem('key');
        return dataFromLS;
    }
}

class FetchClient{
    constructor() {
        this.fetch = new Fetch();
    }

    clientGet(url){
        return this.fetch.request(url);
    }
}

class LocalStorageClient{
    constructor() {
        this.localStorage = new LocalStorage();
    }

    clientGet(key){
        return this.localStorage.get(key);
    }
}

class DataBase{
    constructor(client) {
        this.client = client;
    }

    getData(){
        return this.client.clientGet();
    }
}

const db =new DataBase(new LocalStorageClient());
console.log(db.getData('rand'));