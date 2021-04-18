/*
    Объекты - основная единица ООП в JS, родительским прототипом для всех объектов является Object,
    соотвественно любой объект, у которого есть наследования от Object обладает его полями и методами.
    В JS всё является объектами, в том числе и методы/функции, соотвественно у них есть свои методы
    - объявляются через {}, внути которых записываются пары ключ : значение
    - доступ к полям через obj.field или obj['field_name']
    - деструктуризация - доступ к определённым полям объекта const{field_name1, field_name2} = obj;
    - контекст - внутреннее наполнение определённого объекта. Если создавать функции, которые потом будут работать
    с контекстом переданного объекта, то при определении внутренних анонимных функций важно помнить, что при замене
    стрелочной функции на обычную function() внутри function() существует свой контекст и внутри неё обращение к this
    будет ссылаться на контекст функции
 */

const person = {
    name: 'Misha',
    middleName: undefined,
    surName: 'Bayanga',
    age: 29,
    isMarriage: false,
    greet() {
        console.log('Hate you all!')
    },
    'credo': 'I know you think you hate me, but I will always hate you more.',
    ['answer for all: ' + (Math.sqrt(289))]: 42,
    info() {
        console.info('Information about person with name: ', this.name);
    }
}
console.log(person);
console.log(person.name);
console.log(person['surName']);
console.log(person['credo']);
person.greet();
console.log(person['answer for all: 17']);

delete person.isMarriage; //удаление ключа
console.log(person);
const {name, surName, middleName: mName = 'you should not know', age} = person; // пример деструктуризации
console.log(name + ' ' + mName + ' ' + surName + ' ' + age + ' years old');

//устаревший способ итерации по полям объекта
for (let field in person) { //итерация по неитерироему объекту через in, подстава в том, что он может пробегать по полям своего прототипа
    if (person.hasOwnProperty(field)) { //проверка на то, что поле принадлежит непосредственно этому объекту, а не его протипу
        console.log('key: ', field);
        console.log('value: ', person[field]);
    }
}

//итерация по полям объекта при помощи методов Object
const fields = Object.keys(person); // возращает массив из полей объекта + не пробегает по полям прототипа
console.log('\n');
fields.forEach(field => console.log('key: ' + field + '\nvalue: ' + person[field]));

//контекст
person.info(); //вывод информации об экземпляре объекта через this

const myLogger = { //логгер для
    keys() { //метод, выводящий поля объекта
        console.info('Object fields: ', Object.keys(this));
    },
    keysAndValues() {
        console.info('Object fields:\n');
        Object.keys(this).forEach(key => console.info(`Key: ${key}\nValue: ${this[key]}`));
    },
    withParams(top = false, between = false, bottom = false) {
        if (top) {
            console.log('---------Start----------')
        }
        Object.keys(this).forEach((key, index, array) => {
                console.info(`Key: ${key}\nValue: ${this[key]}`)
                if (between && index !== array.length - 1) {
                    console.log('-----------------------')
                }
            });
        if (bottom) {
            console.log('---------End----------')
        }
    }
}

let boundKeys = myLogger.keys.bind(person); //bind привязывает переданный контекст к своему методу, возращает функцию с
// привязанным контекстом
boundKeys();

myLogger.keys.call(person); //call также как и bind привязывает переданный контекст к методу, но сразу выполняет дейсвтие
// метода, а не возвращает новую функцию
myLogger.keysAndValues.call(person);
myLogger.withParams.call(person, true, true, true);
myLogger.withParams.apply(person, [true, true, true]); //apply делает тоже самое, что и call, но при нескольких входных
// параметрах метода их необходимо передать массивом