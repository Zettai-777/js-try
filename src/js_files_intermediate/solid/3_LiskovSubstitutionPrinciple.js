/*
    Liskov Substitution Principle
    Своими словами: при замене в вызывающем коде класса на любой из его наследников, вызывающий класс не должен
    видеть какую-то разницу. Подкласс не должен требовать от вызывающего его кода больше информации, чем его родитель,
    а также не должен возращать меньше информации, чем его родитель.
 */

//Базовый класс
class Person{
}

//Дополнительный уровень абстракции по роду деятельности
class Member extends Person{
    access() {
        console.log('You have access.')
    }
}

class Guest extends Person{
    isGuest = true;
}


//Наследники
class FrontEnd extends Member{
    createFrontEnd(){

    }
}

class BackEnd extends Member{
    createBackEnd(){

    }
}

class DifferentPerson extends Guest{
    access() {
        throw new Error('You do not have access, go away!');
    }
}

//Вызывающий код
function openSecretDoor(member){
    member.access();
}

openSecretDoor(new FrontEnd());
// openSecretDoor(new DifferentPerson()); //Не может быть использован, так как не член компании

//======================================
class Component{
    isComponent = true;
}

class ComponentWithTemplate extends Component{
    render(){
        return `<div>Component</div>`
    }
}

class  HOC extends Component{

}

class HeaderComponent extends ComponentWithTemplate{
    onInit(){}
}

class FooterComponent extends ComponentWithTemplate{
    afterInit(){}
}

class HigherOrderComponent extends HOC{
    render() {
        throw new Error('Render is impossible here!')
    }

    wrapComponent(component){
        component.wrapped = true;
        return component;
    }
}

function renderComponent(component){
    console.log(component.render());
}

renderComponent(new HeaderComponent());
renderComponent(new FooterComponent());
