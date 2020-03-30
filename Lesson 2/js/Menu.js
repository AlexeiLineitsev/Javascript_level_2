function Menu(myClass, myItems) {
    Container.call(this);

    this.class = myClass;
    this.items = myItems;
}

Menu.prototype = Object.create(Container.prototype);
Menu.prototype.constructor = Menu;

Menu.prototype.render = function () {
     var result = `<ul class="${this.class}">`;
     console.log(this.items);
        for (let i = 0; i < this.items.length; i++)
        {
            //Посмотреть, а Submenu ли это
            if(this.items[i] instanceof Submenu){
                result += '<li>' + this.items[i].render() + '</li>'; //render принадлежит пункту меню
            }
            if(this.items[i] instanceof MenuItem){
                result += this.items[i].render(); //render принадлежит пункту меню
            }
        }
     result += '</ul>';

     this.htmlCode = result; //Сохраняем HTML-код меню
     return result;
};