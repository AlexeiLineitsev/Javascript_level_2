function Submenu(myId, myClass, myItems) {
    Menu.call(this);

    this.id = myId;
    this.class = myClass;
    this.items = myItems;
}

Submenu.prototype = Object.create(Menu.prototype);
Submenu.prototype.constructor = Submenu;