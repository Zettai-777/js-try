/*
    Objects.
    Объекты можно создавать различными способами:
    1) Через {} - const obj = {key1: value1, key2: value2}
    2) Через new Object - const obj = new Object({key1: value1, key2: value2})
    3) Через Object.create({},{}). При этом в первых фигурных скобках передаётся прототип для текущего объекта, во вторых
    свойства самого объекта. Свойствами в свою очередь также выступают объекты. У свойств могут быть заданы описания для
    получения возможности итерирования по ним, изменения, удаления и т.д. Также свойствам можно назначать getter-ы и setter-ы
    для реализации специфичных действий над свойством.
 */


//1
const person1 = {
    name: 'Misha',
    age: 29
}

//2
const person2 = new Object({name: 'Zettai', surName: 'Makenai'});

//3
const person3 = Object.create({
    printNick(){             //задаём в прототипе объекта функцию
        console.log('Person nick: ', prompt('Input your nickname'))
    }
},{
    name: {                  //property
        value: 'Zhan-Michel',
        enumerable: true,    //property descriptor: устанавливаем свойству возможность итерироваться (по умолчанию false)
        writable: true,      //property descriptor: устанавливаем свойству возможность перезаписываться (по умолчанию false)
        configurable: true   //property descriptor: устанавливаем свойству возможность изменяться, в т.ч. удалять поля (по умолчанию false)
    },
    birthYear: {
        value: 1991
    },
    age: {
        get(){              //getter, вычисляющий возраст персоны на основании её года рождения, по итогу задаёт значение свойству
            return new Date().getFullYear() - this.birthYear;
        },
        set(value) {
            console.log('Set age', value);
            // this.age = value;
            // document.body.style.backgroundColor = 'black';
        },
        enumerable: true
    }
})

person3.name = 'Zhan-Michel Bayanga'; //свойство изменит значение, так как writable = true
person3.birthYear = 2010;             //свойство не изменит значение, так как writable = false

function printInfo(object){
    console.group(object.name);
    for(let k in object){
        if(object.hasOwnProperty(k)){ //проверка на то, что свойство принадлежит объекту, а не его прототипу
            console.log(k, ' : ', object[k]);
        }
    }
    console.groupEnd();
}

printInfo(person1);
printInfo(person2);
printInfo(person3);