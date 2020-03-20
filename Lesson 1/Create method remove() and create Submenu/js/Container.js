function Container() {
    this.htmlCode = '';
}

Container.prototype.render = function () {
  return this.htmlCode;
};

Container.prototype.remove = function () {
  //Метод удаляет меню
  // 1 вариант
  //document.querySelector('.' + this.class).remove(); 

  // 2 вариант
  const getClass = document.querySelector('.' + this.class);
  getClass.innerHTML = '';
};