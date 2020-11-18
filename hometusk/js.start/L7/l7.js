// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let textid = document.querySelector('#text');
// let OK = document.forms.myForm.submit;

// OK.onclick = (event) => {
//     textid.style.display = 'none';
//     event.preventDefault();
// };
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let hide = document.forms.myForm.hide;

// hide.onclick = (event) => {
//     hide.style.display = 'none';
//     event.preventDefault();
// };

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let textid = document.querySelector('#text');
// let OK = document.forms.myForm.submit;
// let age = document.forms.myForm.age;

// OK.onclick = (event) =>{
//     if (age.value < 18) {
//         textid.innerHTML = 'buy buy!'
//     } else {
//         textid.innerHTML = 'Hi Bro!!!'
//     };
//     event.preventDefault();
// };

// - Создайте меню, которое раскрывается/сворачивается при клике

// let menu = document.querySelector('.menu');
// let info = document.querySelector('.info');

// menu.style.display = 'flex';
// info.style.display = 'none';

// menu.onclick = () => {
//     if (info.style.display === 'none') {
//         info.style.display = 'block';
//     } else{
//         info.style.display = 'none';
//     };

// };

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.

// let coment = [
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'}
// ];
// let comment = document.querySelector('.comment');

// coment.forEach((text)=>{
//     let div = document.createElement('div');
//     let h2 = document.createElement('h2');
//     let h3 = document.createElement('h3');
//     let button = document.createElement('button');
//     h2.innerText = text.title;
//     h3.innerText = text.body;
//     button.innerText = 'Hide';
//     button.onclick = () => {h3.hidden ? h3.hidden = false : h3.hidden = true};
//     comment.appendChild(div);
//     div.appendChild(h2);
//     div.appendChild(h3);
//     div.appendChild(button);  
// });

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let name1 = document.forms.info.name1;
// let age1 = document.forms.info.age1;
// let name2 = document.forms.info2.name2;
// let age2 = document.forms.info2.age2;
// let btn = document.querySelector('.btm');

// btn.onclick = () =>{
//     console.log(name1.value,age1.value,name2.value,age2.value);
// };
// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.

// let tableDiv = document.querySelector('.comment')

// function crTable(line,box,add) {
//    let table = document.createElement('table');
//     add.appendChild(table);
//     for (let i = 0; i < line; i++) {
//         let tr = document.createElement('tr');
//             table.appendChild(tr);
//         for (let i = 0; i < box; i++) {
//           let td= document.createElement('td');
//             tr.appendChild(td)
//             td.innerText = 'some text';
//         };

//     }    
// };

// crTable(12,12,tableDiv)
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

// let line = document.forms.table.name1;
// let box = document.forms.table.name2;
// let text = document.forms.table.text;
// let tableDiv = document.querySelector('.comment');
// let btn = document.querySelector('.btn');

// console.log(line);

// btn.onclick = () => {
   
// function crTable(rows,cols,info,add) {
//    let table = document.createElement('table');
//     add.appendChild(table);
//     for (let i = 0; i < rows; i++) {
//         let tr = document.createElement('tr');
//             table.appendChild(tr);
//         for (let i = 0; i < cols; i++) {
//           let td= document.createElement('td');
//             tr.appendChild(td)
//             td.innerText = info;
//         };

//     };  
// };
// crTable(line.value,box.value,text.value,tableDiv);
// };

// (Додатковачастина для завдання)

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// let imgs = document.querySelectorAll('.img');
// let swing = document.getElementsByClassName('.swing');
// let left = document.querySelector('.left');
// let right = document.querySelector('.right');


// left.onclick = () => {
//     function swin(index) {
//     index.style.display = 'flex';
//     index.style.order = +1;
//     }

// swin(imgs[0])
//     let del = imgs.shift();
//     imgs.push(del)
//     console.log(del);
// };

// // Є питання!! як поміняти індекс

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

// let badArr = ['js','html','css','java','piton'];
// let text = document.forms.table.text;
// let button = document.querySelector('.btn');

// button.onclick = () =>{
//     badArr.forEach(element => {
//         if (text.value.toLoverCase == element) {
//             alert('не матюкайся');
//         }
//     });
// } 

// Є питання!! як зробити ловеркейс

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

// let badArr = ['js','html','css','java','piton'];
// let text = document.forms.table.text;
// let button = document.querySelector('.btn');

// button.onclick = () =>{
//     badArr.forEach(element => {
//         if (text.value == element) {
//             alert('не матюкайся');
//         }
//     });
// } 

// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

// -- взять массив пользователей
// let usersWithAddress = [
//                 {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//                 {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//                 {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//                 {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//                 {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//                 {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//                 {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//                 {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//                 {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
//             ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ



// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне


// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан