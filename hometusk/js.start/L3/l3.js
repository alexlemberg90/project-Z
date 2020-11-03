// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу

// let info = {
//     dog: {
//         name: 'Tima',
//         color: 'orange',
//         breed: 'pikenes',
//         sex: 'male',
//         age: 8},
//     user: {
//         name: 'Alex',
//         age: 30,
//         wife: true,
//         weight: 101.1,
//         height: 1.74
//     },
//     car: {
//         color: 'back',
//         brand: 'Mazda6',
//         engine: 2.0,
//         maxspeed: 209,
//         power: 6000,
//     },
//     home: {
//         rooms: 2,
//         street: 'Lemkivska',
//         number: 4,
//         kitchencolor: 'white',
//         size: 60,
//     },
//     Book: {
//         name: 'Maby',
//         author: 'Sandra Malborn',
//         date: 12.1990,
//         pages: 150,
//         issued: false
//     }
    
// };

// -- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів

// let info2 = [
//     info.dog, ['tima', 'bobik', 'chapa', 'pes', 'naida'],"Alex","Oleg","Arif","Alena","Serj", info.car, ];
// console.log(info2);

// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка

// let info3 = {
//     hous: true,
//     driver: {
//         name: 'Oleg',
//         age: 42,
//         experience: 20
//     },
//     toy: 'Bear',
//     table: 'Oak',
//     bag: ['red',true,'small']
// };


// Дан массив:
// let users = [
// 				{name: 'vasya', age: 31, status: false},
// 				{name: 'petya', age: 30, status: true},
// 				{name: 'kolya', age: 29, status: true},
// 				{name: 'olya', age: 28, status: false},
// 				{name: 'max', age: 30, status: true},
// 				{name: 'anya', age: 31, status: false},
// 				{name: 'oleg', age: 28, status: false},
// 				{name: 'andrey', age: 29, status: true},
// 				{name: 'masha', age: 30, status: true},
// 				{name: 'olya', age: 31, status: false},
// 				{name: 'max', age: 31, status: true}
// 			];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
// - статус Максима
// - ім'я передостаннього об'єкту
// - ім'я третього об'єкта
// - вік Олега
// - вік Олі
// - вік + ім'я 5го об'єкта
// - вік + сатус Анни
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!


// console.log(users [7] .status);
// console.log(users [4] .status,users [10] .status);
// console.log(users [9] .name);
// console.log(users [2] .name);
// console.log(users [5] .age);
// console.log(users [9] .age,users [3] .age);
// console.log(users [4] .age,users [4] .name);
// console.log(users [5] .age,users [5] .status);

// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
// - отримує текст з блоку з id "rules"
// - замініть текст параграфа з id 'content' на будь-який інший
// - замініть текст параграфа з id 'rules' на будь-який інший
// - змініть кожному елементу колір фону на червоний
// - змініть кожному елементу колір тексту на синій
// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// - отримати всі елементи з класом fc_rules
// - поміняти колір тексту у всіх елементів fc_rules на червоний

let content = document.getElementById('content');
let rules = document.getElementById('rules');

content.innerText = 'Alex not reddy';
rules.innerHTML = '<h1>But muby yup</h1>';
content.style.backgroundColor = 'red';
rules.style.backgroundColor = 'red';
content.style.color = 'blue';
rules.style.color = 'blue';

let fcbp = document.getElementsByClassName('fc bp');
// console.log(fcbp);

let fcrules = document.getElementsByClassName('fc_rules');

for (const fcall of fcrules) {
    fcall.style.color = 'red';
}