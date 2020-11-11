// - створити функцію яка виводить масив

//  let arr = [12,23,453,23];

// function mas() {
    
//     console.log(arr);
// };

// mas();

// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.


// let arr = [];

// function mas(leng) {

//     for (let i = 0; i < leng; i++) {    
//         arr.push (Math.floor(Math.random() *100));  
//     }
    
    
//     console.log(arr);
// };

// mas(10);


// - створити функцію яка приймає три числа та виводить та повертає найменьше.

// function sum(num,num1,num2) {
    
//     if (num <= num1 && num <= num2) {
//       return  console.log(num);
//     } else if (num1 <= num && num1 <= num2) {
//         return  console.log(num1);
//     };

//     return  console.log(num2);
// };

// sum (10,32,61);

// - створити функцію яка приймає три числа та виводить та повертає найбільше.

// function sum(num,num1,num2) {
    
//     if (num >= num1 && num >= num2) {
//       return  console.log(num);
//     } else if (num1 >= num && num1 >= num2) {
//         return  console.log(num1);
//     };

//     return  console.log(num2);
// };

// sum (10,3,6);


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

// function sum() {

//     let min = arguments[0];
//     let max = arguments[0];

// for (let arg of arguments) {
    
//     if (arg > max ) {
//         max = arg;   
//     };
//     if (arg < min ) {
//         min = arg;
        
//     };   
    
// };
// console.log(max);
// return min;
// };

// let min = sum (10,3,6,345,56,345);

// console.log(min);

// - створити функцію яка повертає найбільше число з масиву



// let arr = [22,33,56,8,3,5,43,435];

// function sum(arr) {

// let max = arr[0];

// for (let arg of arr) {
    
//     if (arg > max ) {
//         max = arg;
        
//     };      
// };
// return console.log(max);
// };

// sum (arr);

// - створити функцію яка повертає найменьше число з масиву

// let arr = [22,33,56,8,3,5,43,435];

// function sum(arr) {

// let min = arr[0];

// for (let arg of arr) {
    
//     if (arg < min ) {
//         min = arg;
        
//     };      
// };
// return console.log(min);
// };

// sum (arr);

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

// let arr = [22,33,56,8,3,5,43,435];

// function add(mas) {

//     let all = 0;

//     for (let calk of mas) {
        
//         all += calk;

//     }

//     return console.log(all);

// };

// add(arr);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let arr = [22,33,56,8,3,5,43,435];

// function add(mas) {

//     let all = 0;

//     for (let calk of mas) {
        
//         all += calk;

//     }

//     return all/arr.length;

// };

//  let sum = add(arr);

//  console.log(sum);

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

// let arr = [
//     {
//       id: 1,
//       name: "Leanne Graham",
//       username: "Bret",
//       },
//     {
//       id: 2,
//       name: "Ervin Howell",
//       username: "Antonette",
//       email: "Shanna@melissa.tv",
//     },
//     {
//       id: 3,
//       name: "Clementine Bauch",
//       username: "Samantha",
//       email: "Nathan@yesenia.net",
//     },
//     {
//       id: 4,
//       name: "Patricia Lebsack",
//       username: "Karianne",
//       email: "Julianne.OConner@kory.org",
//     },
//   ];


// function all(array) {

// let sum = 0;
// for (let arr of array) {
//     sum++
// };
// console.log(sum);

// };

// all(arr);

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

// let arr = [
//     {
//       id: 1,
//       name: "Leanne Graham",
//       username: "Bret",
//       },
//     {
//       id: 2,
//       name: "Ervin Howell",
//       username: "Antonette",
//       email: "Shanna@melissa.tv",
//     },
//     {
//       id: 3,
//       name: "Clementine Bauch",
//       username: "Samantha",
//       email: "Nathan@yesenia.net",
//     },
//     {
//       id: 4,
//       name: "Patricia Lebsack",
//       username: "Karianne",
//       email: "Julianne.OConner@kory.org",
//     },
//   ];

// function all(array) {

// let sum = 0;
// for (let arr of array) {
//     for (const ar in arr) {
//         sum++
//     }
    
// };
// console.log(sum);

// };

// all(arr);

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

// let onemas = [1,2,3,4];
// let twomas = [9,8,7,6];

// function neww(mas1,mas2) {
// let newmas = [];
// for (let i = 0; i < mas1.length; i++) {
//     newmas.push(mas1[i]+mas2[i]);
// }
// return newmas;
// };

// let all = neww(onemas,twomas);
// console.log(all);

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"




// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// let arr = [1,2,3,0,4,0,0,5,6,7,0];
// let sortarr = [];
// let newarr =[];

// function sort(arrey,sorts) {
//     for (let num of arrey) {
//         if (num === 0) {
//             sortarr.push(num); 
//     }else {
//         sortarr.unshift(num);
//         };
//     };
//     for (let numb of sorts) {
//         if (numb === 0) {
//             newarr.push(numb);
//         } else {
//             newarr.unshift(numb); 
//         }
       
//     }
    
// };

// sort(arr,sortarr);
// console.log(arr);
// console.log(newarr);

// let arr = [1,2,3,0,4,0,0,5,6,7,0];
// let sortarr = [];

// function sort(arrey) {
//     for (let num of arrey) {
//         if (num !== 0) {
//             sortarr.push(num); 
//     };
//     };
//     for (let num1 of arrey) {
//         if (num1 === 0) {
//             sortarr.push(num1)
//         };
//     };
// };

// sort(arr);
// console.log(arr);
// console.log(sortarr);

// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"

// function block(){
// let div = document.createElement('div');

// div.innerText = "Hello owu";

// document.body.appendChild(div);

// }

// block();

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

// function block(elem,text){
//     let eleme = document.createElement(elem);
    
//     eleme.innerText = text;
    
//     document.body.appendChild(eleme);
    
//     };
    
//     block('h1',"text");
    


// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.


// let cars = [{model: 'audi',age: '2000year',color: 'blue',power: 6000},
// {model: 'Vaz',age: '1990year',color: 'black',power: 1000},
// {model: 'Laz',age: '2010year',color: 'red',power: 2000},
// {model: 'Zaz',age: '2011year',color: 'white',power: 3000},
// {model: 'Opel',age: '2009year',color: 'orange',power: 4000},
// {model: 'Niko',age: '2005year',color: 'purple',power: 5000},
// {model: 'Hell',age: '2013year',color: 'green',power: 6666},
// {model: 'BMW',age: '2020year',color: 'yellow',power: 7200},
// {model: 'Ups',age: '1999year',color: 'silver',power: 1500},
// {model: 'Hz',age: '2001year',color: 'gold',power: 2500}];

// function info(mascar) {
// for (let i = 0; i < mascar.length; i++) {
//     let car = mascar[i];
//     let div = document.createElement('div');
// div.innerText = `${car.model}`;
// document.body.appendChild(div);
// };
// };

// info(cars);

// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці

// let cars = [{model: 'audi',age: '2000year',color: 'blue',power: 6000},
// {model: 'Vaz',age: '1990year',color: 'black',power: 1000},
// {model: 'Laz',age: '2010year',color: 'red',power: 2000},
// {model: 'Zaz',age: '2011year',color: 'white',power: 3000},
// {model: 'Opel',age: '2009year',color: 'orange',power: 4000},
// {model: 'Niko',age: '2005year',color: 'purple',power: 5000},
// {model: 'Hell',age: '2013year',color: 'green',power: 6666},
// {model: 'BMW',age: '2020year',color: 'yellow',power: 7200},
// {model: 'Ups',age: '1999year',color: 'silver',power: 1500},
// {model: 'Hz',age: '2001year',color: 'gold',power: 2500}];

// function info(mascar) {
// for (let i = 0; i < mascar.length; i++) {
//     let car = mascar[i];
//     let div = document.createElement('div');
// div.innerText = `${[i+1]} - ${car.model}`;
// document.body.appendChild(div);
// };
// };

// info(cars);

// Для кожної властивості створити всередені блока автомоблія свій блок


// let cars = [{model: 'audi',age: '2000year',color: 'blue',power: 6000},
// {model: 'Vaz',age: '1990year',color: 'black',power: 1000},
// {model: 'Laz',age: '2010year',color: 'red',power: 2000},
// {model: 'Zaz',age: '2011year',color: 'white',power: 3000},
// {model: 'Opel',age: '2009year',color: 'orange',power: 4000},
// {model: 'Niko',age: '2005year',color: 'purple',power: 5000},
// {model: 'Hell',age: '2013year',color: 'green',power: 6666},
// {model: 'BMW',age: '2020year',color: 'yellow',power: 7200},
// {model: 'Ups',age: '1999year',color: 'silver',power: 1500},
// {model: 'Hz',age: '2001year',color: 'gold',power: 2500}];

// function info(mascar) {

// for (let i = 0; i < mascar.length; i++) {
// car = mascar[i];
// let hr = document.createElement('hr');
// let model = document.createElement('div');
// let age = document.createElement('div');
// let color = document.createElement('div');
// let power = document.createElement('div');
//   let info = document.createElement('div');


// info.style.textAlign = 'center';
// info.innerText = `${car.model}`; 

// age.innerText = `age - ${car.age}`;
// color.innerText = `color - ${car.color}`;
// power.innerText = `power - ${car.power}`;
// document.body.appendChild(info);
// info.appendChild(model);
// info.appendChild(age);
// info.appendChild(color);
// info.appendChild(power);
// info.appendChild(hr);
// };


// };

// info(cars);

// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
// Частковий приклад реультату:

// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];


// function infomas(masname,masciti) {
    

// for (let user of usersWithId) {
//     for (let citie of citiesWithId) {
//         if (user.id === citie.user_id) {
//             user.addresses = citie;
//         };
//     };
// };
// return usersWithId;
// }


// let users = infomas(usersWithId,citiesWithId);
// console.log(users);

// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},

// 			];
