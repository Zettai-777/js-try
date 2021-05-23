/*
    Работы с DOM деревом (взаимодействие с html)
    - DOM - Document Object Model. В соответствии с DOM моделью каждый html тэг является объектом (node - узел).
    Вложенные тэги являются детьми родительского элемента. Текст, находящийся внутри тэга также является объектом.
    - В браузере в инструментах разработчика во вкладке Elements находится DOM представление (абстракция) той html страницы,
    с которой мы работаем на сервере с которым может взаимодействовать JS - является api браузера.

    Внутри DOM дерева есть глобальные объекты:
    - document - представление текущей страницы
    - window - глобальный объект, содержащий в себе множество методов, которые далее вызываются в js файлах, например
    alert, prompt, console, confirm, setInterval, setTimeout и т.д.
    - обработка событий: для каждого элемента существует ряд событий, с которыми можно работать. Названия таких атрибутов
    начинается с приставки on. Можно обрабатывать события либо через атрибут on_event, либо через addEventListener
 */

//работа с нодами

let heading = document.getElementById('Hello'); //поиск элемента в DOM дереве по его id - самый старый и быстрый способ
console.dir(heading.textContent);

// const heading2 = document.getElementsByTagName('h2')[0]; //позволяет найти тэг по своему наименованию, возращает массив
// // HTML collection. Для того, чтобы достать нужный элемент, нужно знать его номер, устаревший и медленный метод
// const heading2 = document.getElementsByClassName('h2-class')[0]; //работает как и предыдущий метод

const heading2 = document.querySelector('#sub-Hello')// работает через CSS селекторы, следовательно можно использовать разные
// свойства для поиска элемента (.class-name - поиск по имени класса, #id - поиск по id), новый и удобный метод, всегда возращает первый
// попавшийся элемент
console.log(heading2);

const heading3 = heading2.nextElementSibling; //поиск ноды такого же типа, как и предыдущая, но без использования класса или id
console.log(heading3);

const h2List = document.querySelectorAll('h2'); //возвращает список NodeList по переданному названию тэга
console.log(h2List);
const heading4 = h2List[2]; //ещё один способ получения node, через список node такого типа
console.log(heading4);

const link = heading.querySelector('a'); //поскольку внутри тэга h1 была вложена ссылка, мы можем обратиться к ней через children
// или через querySelector('a');
link.addEventListener('click', (event) => { // через event передаётся информация о событии
    event.preventDefault(); //отменяет поведение события по умолчанию
    console.log('Click on link', event.target.getAttribute('href')); //в event.target хранится информация о самой сслыке
    const url = event.target.getAttribute('href');
    window.location = url;
})

setTimeout(() => {
    addStyleTo(link, 'Zettai');
}, 2000);

setTimeout(() => {
    addStyleTo(heading2, 'CHANGED', 'red');
}, 3000);

setTimeout(() => {
    addStyleTo(heading3, 'YOU!', 'white', '2rem');
}, 4000);

setTimeout(() => {
    addStyleTo(heading4, heading4.textContent, 'white');
}, 5000);

function addStyleTo(node, text, color = 'blue', fontSize) {
    node.textContent = text;
    node.style.color = color;
    node.style.textAlign = 'center';
    node.style.backgroundColor = 'black';
    node.style.padding = '2rem';
    node.style.display = 'block'; //задаёт расположение для ссылки
    node.style.width = '100%'; // задаёт ширину ссылки
    // falsy : '', undefined, null, 0, false - значения по умолчанию
    if (fontSize) {
        node.style.fontSize = fontSize;
    }
}

//Обработка события клика левой кнопкой мышки
heading4.onclick = () => {
    if (heading4.style.color === 'white') {
        heading4.textContent = 'And it was AWESOME!'
        heading4.style.color = '#000';
        heading4.style.backgroundColor = '#fff';
    } else {
        heading4.style.color = 'white';
        heading4.style.backgroundColor = '#000';
    }
}

heading2.onclick = () => {
    if (heading2.style.color === 'red') {
        heading2.style.color = '#000';
        heading2.style.backgroundColor = '#fff';
    } else {
        heading2.style.color = 'red';
        heading2.style.backgroundColor = '#000';
    }
}

heading3.addEventListener('dblclick', () => {
    if (heading3.style.color === 'white') {
        heading3.style.color = '#702';
        heading3.style.backgroundColor = '#319';
    } else {
        heading3.style.color = 'white';
        heading3.style.backgroundColor = '#000';
    }
})