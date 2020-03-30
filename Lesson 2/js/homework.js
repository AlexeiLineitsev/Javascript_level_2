'use strict';

window.onload = function () {
    var count = 0;
    document.querySelector('.btn').addEventListener('click', function () {
        ++count;
        if (count <= 1) {
            createMenu();
        }
    });

    getPathFoto();

    var slider = document.querySelector('#fotoGalletySmall');
    slider.addEventListener('click', changeBigPicture);
};


// get array[MenuItems] from file menu.json and fill the array with a loop, create class menu1 and  "insertAdjacentHTML" in div.class
async function createMenu() {
    var itemsMenu = [];

    var url = './js/menu.json';
    var response = await fetch(url);
    var menuItems = await response.json();

    for (let i = 0; i < menuItems.length; i++) {
        itemsMenu.push(new MenuItem('#', menuItems[i], 'nav-item', 'nav-link'));
    }

    var menu1 = new Menu('navbar-nav', itemsMenu);
    var result = menu1.render();

    var navbarNav = document.querySelector('.navbar-nav');
    navbarNav.insertAdjacentHTML('afterbegin', result);
}


// get array[path files foto] from file pathFilesFoto.json and create array a>img(scr=array[path]) and add default bigImgage
async function getPathFoto() {
    var itemsPath = [];
    var url = './js/pathFilesFoto.json';
    var response = await fetch(url);
    var items = await response.json();

    for (let i = 0; i < items.length; i++) {
        var result = `<a href="#" ><img src="${items[i]}" alt="Котик" class="rounded-lg"></a>`;
        itemsPath.push(result);
    }
    result = itemsPath.join(' ');
    document.querySelector('#fotoGalletySmall').insertAdjacentHTML('afterbegin', result);
    result = `<img src="./img/big/1.jpg" alt="Котик" class="rounded">`;
    document.querySelector('.imgBig').insertAdjacentHTML('afterbegin', result);

}

// Change image but without onerror
function changeBigPicture(event) {
    let smallImg = event.target.src;
    let srcArr = smallImg.split('/');
    let smallImgName = srcArr[srcArr.length - 1];
    let bigImgScr = `./img/big/${smallImgName}`;
    document.querySelector('.imgBig').innerHTML = '';
    let result = `<img src="${bigImgScr}" alt="Кот" class="rounded">`;
    document.querySelector('.imgBig').insertAdjacentHTML('afterbegin', result);
}