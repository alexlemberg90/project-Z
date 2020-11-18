// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

// let saveText = document.getElementById('saveText');

// saveText.oninput = (ev) => {
// let save = ev.target.value
// localStorage.setItem('text',save);
// };
// let get = localStorage.getItem('text');
// saveText.innerText = get;

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.

// let form = document.forms.myForm;
// let text = document.forms.myForm.text;
// let area = document.forms.myForm.area;
// let radio = document.forms.myForm.radio;
// let checkbox = document.forms.myForm.checkbox;
// let select = document.forms.myForm.select;
// let saveText = [text,area];
// let saveInfo = [radio,checkbox,select];


// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

// let left = document.getElementById('left');
// let right = document.getElementById('right');
// let text = document.getElementById('text');
// let save = document.getElementById('save');

// save.onclick = () =>{
//     let intext = text.value
//     localStorage.setItem(localStorage.length+1,intext);
// };
// left.onclick = () =>{
//     let keys
//         for (let key in localStorage) {
//             if (localStorage.getItem(key) === text.value)
//             keys = key
//         };
//         if (keys === '1'){
//             return;
//         }
//     text.value = localStorage.getItem(keys - 1);

// };
// right.onclick = () =>{
//     let keys
//         for (let key in localStorage) {
//             if (localStorage.getItem(key) === text.value)
//             keys = key
//         };
//         if (keys === localStorage.length.toString()){
//             return;
//         }
//     text.value = localStorage.getItem(+keys + 1);
// };

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта



