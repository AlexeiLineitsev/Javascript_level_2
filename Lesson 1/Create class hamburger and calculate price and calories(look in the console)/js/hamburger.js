//Напишите программу, рассчитывающую стоимость и калорийность гамбургера. 
//Используйте ООП подход 
//(подсказка: нужен класс Гамбургер, константы, методы для выбора опций и расчета нужных величин).


function Hamburger(size, stuffing, topping) {

    this.size = size
    this.stuffing = stuffing
    this.topping = topping
}


function SIZE_SMALL() {
    Hamburger.call(this, arguments);
    this.price = 50
    this.calories = 20        
}


SIZE_SMALL.prototype = Object.create(Hamburger.prototype);
SIZE_SMALL.prototype.constructor = SIZE_SMALL;


function SIZE_LARGE() {
    Hamburger.call(this, arguments);
    this.price = 100
    this.calories = 40        
}

SIZE_LARGE.prototype = Object.create(Hamburger.prototype);
SIZE_LARGE.prototype.constructor = SIZE_LARGE;



function STUFFING_CHEESE() {
    this.price = 10
    this.calories = 20
}

function STUFFING_SALAD() {
    this.price = 20
    this.calories = 5
}

function STUFFING_POTATO() {
    this.price = 15
    this.calories = 10
}

function TOPPING_MAYO() {
    this.price = 20
    this.calories = 5
}

function TOPPING_SPICE() {
    this.price = 15
    this.calories = 0 // по идее может они и не нужны
}



Hamburger.prototype.getCalories = function () {
    //console.log(this);
    var calories = 0;

    if(this.size !== null) { calories += this.size.calories}
    if(this.stuffing !== null) { calories += this.stuffing.calories}
    if(this.topping !== null) { calories += this.topping.calories}

    return calories;
}


Hamburger.prototype.getPrice = function () {
    var price = 0;

    if(this.size !== null) { price += this.size.price}
    if(this.stuffing !== null) { price += this.stuffing.price}
    if(this.topping !== null) { price += this.topping.price}

    return price;
}