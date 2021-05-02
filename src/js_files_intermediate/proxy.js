/*
    Proxy
    Класс в JS (создаём через new Proxy (target, handlers), который позволяет создавать дополнительный функционал у
    переданного ему в качестве первого аргумента объекта за счёт обработчиков, передаваемых вторым аргументов.
    Передаваемыми объектами могут быть просто объекты, функции (перехватываем их вызов и добавляем новые действия) или
    классы
 */

//Objects
const person = {
    name: 'Ivan',
    age: 29,
    job: 'master'
}

const objectProxy = new Proxy(person,{  //создаём прокси для объекта person (передаётся первым параметром) и задаём обработчики

    get(target, prop){          //первый обработчик -  геттер get(target, prop)
        console.log(`Getting property key: ${prop}`);
        if(!(prop in target)){
            return prop
                .split('_')
                .map(part => target[part])
                .join(' ');
        }
        return target[prop];
    },
    set(target, prop, value) {  //второй обработчик - сеттер set(target, prop, value)
        if(prop in target){                     //проверяем, что хотим изменить существующее поле объекта
            target[prop] = value;               //задаём свойству объекта полученное значение
        }else {                                 //если такого поля нет, то генерируем ошибку
            throw new Error(`No ${prop} field in target`);
        }
    },
    has(target, prop){          //обработчик has() возвращает булево значение в зависимости от взаимосвязи объекта и его свойства
        return ['age', 'name', 'job'].includes(prop); //проверяем включено ли переданное свойство в заданный список свойств объекта (проверка через prop in object)
    },
    deleteProperty(target, prop) {//обработчик deleteProperty нужен для удаления переданного свойства из объекта
        console.log('Deleting ' + prop);
        delete target[prop];                      //удаляем переданное свойство из объекта с помощью встроенного метода
        return true;
    }
});

//Functions
const log = text => `Log: ${text}`;

const functionProxy = new Proxy(log, {
    apply(target, thisArg, argArray) {      //обработчик apply() позволяет перехватить вызов функции (первого аргумента) и добавить ей дополнительный функционал
        console.log('target:' + target);    //передаваемый объект (в данном случае функция)
        console.log('thisArg:' + thisArg);  //передаваемый контекст (можем получить с помощью bind или call)
        console.log('argArray:' + argArray);//передаваемые аргументы функции (в данном случае только text)
        console.log('Calling function log');
        return target.apply(thisArg, argArray).toUpperCase();
    }
})

//Classes
class User{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const UserProxy = new Proxy(User, {
    construct(target, argArray) { //обработчик, позволяющий перехватить вызов конструктора у передаваемого в proxy класса
        console.log('Construct...');
        return new Proxy(new target(...argArray), { //возвращаем не сам экземпляр, а новый proxy c нашим экземпляром
          get(targ, prop){
              console.log('Getting prop: ' + prop);
              return targ[prop];
          }
        });
    }
});

const user = new UserProxy('Kris', 27);

/*
    Практическое применение Proxy
 */

//Wrapper
const withDefaultValue = (target, defaultValue = 0) =>{     //функция, добавляющая значение по умолчанию полям, которых нет в объекте
    return new Proxy(target, {
        get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue)
    })
}

const position = withDefaultValue({
    x: 24,
    y: 42
}, 0);

// console.log(position);

//Hidden properties
const withHiddenProps = (target, prefix = '_') =>{ //функция, которая скрывает поляЮ начинающиеся с переданного префикса
    return new Proxy(target, {
        has: (obj, prop) => { //возвращаем true, если свойство содержится в объекте и не начинается с префикса
            return (prop in obj) && (!prop.startsWith(prefix))
        },
        ownKeys: obj => Reflect.ownKeys(obj) //с помощью рефлексии проверяем, какие ключи находятся внутри объекта
            .filter(p => !p.startsWith(prefix)),//убираем из списка ключей те, которые начинаются с префикса
        get: (obj, prop, receiver) => (prop in receiver) //получаем поле из объекта, проверяя что свойство имеется в Proxy
            ? obj[prop] : void 0        //если да, то просто возвращаем свойство, иначе возращаем undefined через void 0
    })
}

const data = withHiddenProps({
    name: 'Viktor',
    age: 28,
    _uid: '2192'
});

//Optimization
const userData = [ //задаём начальный массив для работы
    {id: 1, name: 'Misha', job: 'programmer', age:29},
    {id: 2, name: 'Nasty', job: 'game developer', age:29},
    {id: 3, name: 'Victor', job: 'sales manager', age:28},
    {id: 4, name: 'Sonya', job: 'student', age:19},
    {id: 5, name: 'Ivan', job: 'master', age:29}
]

const IndexArray = new Proxy(Array, {       //proxy, возвращающий доработанный класс Array (поэтому имя переменной с заглавной буквы)
    construct(target, [argArray]) {
        const index ={};                           //здесь будут храниться id элементов массива для дальнейшего поиска по ним
        argArray.forEach(item => (index[item.id] = item)); //один раз при создании объекта проходимся по массиву и вытаскиваем id
        return new Proxy(new target(...argArray), { //возвращаем новый proxy, в котором добавляем геттер
            get(array, prop){
                switch (prop){                             //проверяем переданное свойство(в данном случае название метода)
                    case 'push': return item => {          //если добавляем новый элемент в список, то также добавлем id в index
                            index[item.id] = item;
                            array[prop].call(array, item);
                        }
                    case 'findById': return id => index[id];//прописываем логику нового добавленного метода findById
                    default: return array[prop];            //по умолчанию возвращаем переданное свойство массива
                }
            }
        })
    }
})

const users = new IndexArray(userData);
