var str = `var a = str.replace(/[']/g, '"') aren't t'qwewert`;


var pattern = /[']/g;
var a = str.replace(pattern, '"');

document.querySelector('#task-1').innerHTML = 'Решение:' +
    `<br>Используем метод replace(${pattern}, ${"'"})` +
    '<br>Ответ:' + `<br>` + a + `<br>(Заменили все ${"'"} на ${'"'}, решение также можно посмотреть в консоле)`;

console.log('------------------Решение первой задачи----------------------------');
console.log(a);


console.log('------------------Решение второй задачи----------------------------');
pattern = /\'(?=\W)/g;
a = str.replace(pattern, '"');
console.log(a);

document.querySelector('#task-2').innerHTML = 'Решение:' +
    `<br>Используем метод replace(${pattern}, ${"'"}) и добавляем в паттерн` +
    '<br>Ответ:' + `<br>` + a + `<br>(Заменили все ${"'"} на ${'"'}, решение также можно посмотреть в консоле)`;

console.log('------------------Решение третьей задачи----------------------------');
let button = document.querySelector('.btn');

button.addEventListener('click', check);

function check(event) {
    event.preventDefault();

    let name = document.querySelector('#name').value;
    let tel = document.querySelector('#phone').value;
    let email = document.querySelector('#email').value;

    patternName = /^[a-zA-Zа-яёА-ЯЁ\s]+$/mgi;
    patternTel = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/mg;
    patternEmail = /^.+@.+\..+$/img;


    if (patternName.test(name) === false) {
        clearErrorHtml('#errorInput');
        ouputError('#name', 'Для имени используйте только буквы');
        lightingError('#name');

    } else if (patternTel.test(tel) === false) {
        clearErrorHtml('#errorInput');
        ouputError('#phone', 'Вы неверное указали телефон');
        lightingError('#phone');

    } else if (patternEmail.test(email) === false){
        clearErrorHtml('#errorInput');
        ouputError('#email', 'Вы неверное указали email');
        lightingError('#email');
    } else {
        clearErrorHtml('#errorInput');
        ouputError('#name', 'Все верно');
    }
}

//for output window error
function ouputError(selector, text) {
    let span = document.createElement('span');
    span.className = 'error-input  alert-danger';
    span.id = 'errorInput';
    span.innerHTML = text;
    var error = document.querySelector(selector);
    error.before(span);
}

//for hide window error
function clearErrorHtml(selector) {
    var error = document.querySelector(selector);
   // console.log(error);
    if (error !== null) {
        error.remove();
    }
}

//for lighting input border
function lightingError(selector) {
    var error = document.querySelector(selector);
    error.style.border = '1px solid red';
    setTimeout(function () {
        error.style.border = 'none';
    }, 5000);
}
