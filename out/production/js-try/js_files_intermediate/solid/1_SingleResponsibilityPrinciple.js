/*
    Single Responsibility Principle
    Своими словами: каждая сущность должна отвечать только за одну задачу и иметь только одну ось изменений
 */

class News{
    /*
        Класс Новости.
        Должен ответчать только за изменения состояния конкретной новости
     */
    constructor(title, text) {
        this.titile = title;
        this.text = text;
        this.modified = false;
    }

    update(newText){
        this.text = newText;
        this.modified = true;
    }

}

class NewsPrinter{
    /*
        Класс, отвечающий за отображение новостей в каком либо формате.
     */

    constructor(news) {
        this.news = news;
    }

    html(){
        return `
         <div class="news">
             <h1>${this.news.titile}</h1>
             <p>${this.news.text}</p>
         </div>
        `
    }

    json(){
        return JSON.stringify({
            title: this.news.titile,
            text: this.news.text,
            modified: this.news.modified
        }, null, 2)
    }

    xml(){
        return `
        <news>
            <title>${this.news.titile}</title>
            <text>${this.news.text}</text>
            <modified>${this.news.modified}</modified>
        </news>
        `
    }

}

const news = new News('Путин','Новая конститутция');
const printer = new NewsPrinter(news);
// news.update('ClickBate');

console.log(printer.html());
console.log(printer.json());
console.log(printer.xml());