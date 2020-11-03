// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

// let some = {
//     name: 'Alex',
//     age: 30,
//     wife: true
// };
// let some1 = {
//     name: 'Anton',
//     age: 20,
//     wife: false
// };
// let some2 = {
//     name: 'Arif',
//     age: 25,
//     wife: true
// };
// let some3 = {
//     name: 'Nadia',
//     age: 18,
//     wife: true
// };
// let some4 = {
//     name: 'Dima',
//     age: 33,
//     wife: false
// };

// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };

// let info = {
//     name: 'Dima',
//     age: 33,
//     wife: {
//         name: 'Ira',
//         age: 30
//     },
//     job:['restorunt','IT']
// };
// let info1 = {
//     name: 'Anton',
//     age: 20,
//     car: {
//         model: 'Mazda6',
//         age: 2
//     },
//     address:['Lemkivska', 2]
// };
// let info2 = {
//     name: 'Igor',
//     age: 20,
//     car: {
//         model: 'BMW',
//         age: 1
//     },
//     address:['Shevchenka', 22,'a']
// };
// let info3 = {
//     name: 'Stus',
//     age: 25,
//     wife: {
//         name: 'Masha',
//         age: 22
//     },
//     address:['Horodotska', 222]
// };
// let info4 = {
//     name: 'Arif',
//     age: 45,
//     car: {
//         model: 'Opel',
//         age: NaN
//     },
//     address:['Balabana', 12]
// };
// - При помощи for in вывести все ключи всех объектов из задания 1 и 2

// for (const key in some) {
//         console.log(key)
//     };
//     for (const key in some1) {
//         console.log(key)
//     };
//     for (const key in some2) {
//         console.log(key)
//     };
//     for (const key in some3) {
//         console.log(key)
//     };
//     for (const key in some4) {
//         console.log(key)
//     };
//     for (const key in info) {
//         console.log(key)
//     };
//     for (const key in info1) {
//         console.log(key)
//     };
//     for (const key in info2) {
//         console.log(key)
//     };
//     for (const key in info3) {
//         console.log(key)
//     };
//     for (const key in info4) {
//         console.log(key)
//     };


// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

// console.log(Object.keys(some));
// console.log(Object.keys(some1));
// console.log(Object.keys(some2));
// console.log(Object.keys(some3));
// console.log(Object.keys(some4));
// console.log(Object.keys(info));
// console.log(Object.keys(info1));
// console.log(Object.keys(info2));
// console.log(Object.keys(info3));
// console.log(Object.keys(info4));

// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)

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


// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)

// let cities = [{name:'Lviv',population:724314,country:'Ukraine',region:'Lviv reg.'},
// {name:'Kyiv',population:2961500,country:'Ukraine',region:'Kyiv reg.'},
// {name:'Liverpool',population:513441,country:'England',region:'Merseyside reg.'},
// {name:'Suntio',population:221332,country:'Newerland',region:'Zertik reg.'},
// {name:'Rundom',population:7777,country:'Hzland',region:'Lucky reg.'},
// ];

// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

// let infocar = [{model: 'audi',age: '2000year',color: 'blue',power: 6000,driver: {name: 'Alex',age: 23,sex: 'male',experience: '1 year'}},
// {model: 'Vaz',age: '1990year',color: 'black',power: 1000,driver: {name: 'Oleg',age: 30,sex: 'male',experience: '7 years'}},
// {model: 'Laz',age: '2010year',color: 'red',power: 2000,driver: {name: 'Alina',age: 20,sex: 'female',experience: '2 years'}},
// {model: 'Zaz',age: '2011year',color: 'white',power: 3000,driver: {name: 'Dima',age: 40,sex: 'male',experience: '20 years'}},]

// - проитерировать каждый массив из задания 5,6,7 при помощи while.

// let i = 0;

// while (i< cars.length) {
//     console.log(cars[i]);
//     i++
// };

// i = 0;

// while (i< cities.length) {
//     console.log(cities[i]);
//     i++
// };

// i = 0;

// while (i< infocar.length) {
//     console.log(infocar[i]);
//     i++
// };

// - проитерировать каждый массив из задания 5,6,7 при помощи for .

// for (let i = 0; i < cars.length && cities.length && infocar.length; i++) {
//     console.log(cars[i]);
//     console.log(infocar[i]);
//     console.log(cities[i]);   
// }


// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.

// for (const iterator of cars) {
//     console.log(iterator);
// };
// for (const iterator of infocar) {
//     console.log(iterator);
// };
// for (const iterator of cities) {
//     console.log(iterator);
// };

// - взять объекты из задания 1 и превратить каждый в json.

// let json = JSON.stringify(some);
// let json1 = JSON.stringify(some1);
// let json2 = JSON.stringify(some2);
// let json3 = JSON.stringify(some3);
// let json4 = JSON.stringify(some4);

// - взять json из задания 11 и превратить их обратно в объекты.

// let parjson = JSON.parse(json);
// let parjson1 = JSON.parse(json1);
// let parjson2 = JSON.parse(json2);
// let parjson3 = JSON.parse(json3);
// let parjson4 = JSON.parse(json4);

// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .

// for (const iterator of cars) {
//     let jsn = JSON.stringify(iterator);
// };

// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

// for (const iterator of cities) {
//     let jsn = JSON.stringify(iterator);
// };

// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.

// let next =  [];

// for (const iterator of cars) {
//     let jsn = JSON.stringify(iterator);
//     next.push(jsn);
// };
// console.log(next);

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills

// let users = [{
//     name: 'Alex',
//     age: 30,
//     wife: true,
//     skills: ['lern']
// },
// {
//     name: 'Anton',
//     age: 20,
//     wife: false,
//     skills: ['lern']
// },
// {
//     name: 'Arif',
//     age: 25,
//     wife: true,
//     skills: ['lern']
// },
// {
//     name: 'Nadia',
//     age: 18,
//     wife: true,
//     skills: ['lern']
// },
// {
//     name: 'Dima',
//     age: 33,
//     wife: false,
//     skills: ['lern']
// }];

// for (const user of users) {
//     console.log(user);
//     for (const skill of user.skills) {
//         console.log(skill);
//     }
// };

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив

// let solo = [];

// for (const user of users) {
//     console.log(user);
//     for (const skill of user.skills) {
//         console.log(skill);
//         solo.push(skill);
        
//     }
// };
// console.log(solo);

// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.



//  let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//   {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//    {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//      {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];

// for (const user of users) {
//     console.log(user);
//     for (const skill of user.skills) {
//         console.log(skill);
//     }
// }




            			// let users = [{
            			// 	name: 'vasya',
            			// 	age: 31,
            			// 	status: false,
            			// 	address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
            			// }, {
            			// 	name: 'petya',
            			// 	age: 30,
            			// 	status: true,
            			// 	address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
            			// }, {
            			// 	name: 'kolya',
            			// 	age: 29,
            			// 	status: true,
            			// 	address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
            			// }, {
            			// 	name: 'olya',
            			// 	age: 28,
            			// 	status: false,
            			// 	address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
            			// }, {
            			// 	name: 'max',
            			// 	age: 30,
            			// 	status: true,
            			// 	address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
            			// }, {
            			// 	name: 'anya',
            			// 	age: 31,
            			// 	status: false,
            			// 	address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
            			// }, {
            			// 	name: 'oleg',
            			// 	age: 28,
            			// 	status: false,
            			// 	address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
            			// }, {
            			// 	name: 'andrey',
            			// 	age: 29,
            			// 	status: true,
            			// 	address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
            			// }, {
            			// 	name: 'masha',
            			// 	age: 30,
            			// 	status: true,
            			// 	address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
            			// }, {
            			// 	name: 'olya',
            			// 	age: 31,
            			// 	status: false,
            			// 	address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
            			// }, {
            			// 	name: 'max',
            			// 	age: 31,
            			// 	status: true,
            			// 	address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
            			// }];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.




// let addresses = [];

// for (let user of users) {

//     addresses.push(user.address);

// };
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

// let addr = JSON.stringify(addresses);

// for (const user of users) {
//    let div = document.createElement("div");
//    div.innerHTML =`<div>${user.name}${user.age}${user.status}${addr}</div>`;
//    document.body.appendChild(div);
// };

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

// let addr = JSON.stringify(addresses);

// for (const user of users) {
//    let div = document.createElement("div");
//    let div1 = document.createElement("div");
//    let div2 = document.createElement("div");
//    let div3 = document.createElement("div");
//    div.innerHTML = user.name;
//    div1.innerHTML = user.age;
//    div2.innerHTML = user.status;
//    div3.innerHTML = addr;

//    document.body.appendChild(div);
//    div.appendChild(div1);
//    div.appendChild(div2);
//    div.appendChild(div3);
// };

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// for (const user of users) {
//     for (const addr of addresses) {
        
    
//    let div = document.createElement("div");
//    let div1 = document.createElement("div");
//    let div2 = document.createElement("div");
//    let div3 = document.createElement("div");
//    let div4 = document.createElement("div");
//    let div5 = document.createElement("div");
//    let div6 = document.createElement("div");
//    div.innerHTML = user.name;
//    div1.innerHTML = user.age;
//    div2.innerHTML = user.status;
//    div3.innerHTML = addr.city;
//    div4.innerHTML = addr.country;
//    div5.innerHTML = addr.street;
//    div6.innerHTML = addr.houseNumber;

//    document.body.appendChild(div);
//    div.appendChild(div1);
//    div.appendChild(div2);
//    div.appendChild(div3);
//    div.appendChild(div4);
//    div.appendChild(div5);
//    div.appendChild(div6);
//  }; 
// };

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
            // let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
            // let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];




// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// for (const user of usersWithId) {
//     for (const citie of citiesWithId) {
//         if (user.id === citie.user_id) {
//             user.addresses = citie;
//         };
//     };
// };
// console.log(usersWithId);

// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]

// let usersWithCities = [];

// usersWithCities.push(usersWithId);
// console.log(usersWithCities);

// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу

let content = document.getElementById('content');
let rules = document.getElementsByClassName('rules');
let h1 = document.getElementsByTagName('h1');

// console.log(content);
// for (let rule of rules) {
//     console.log(rule);
// };
// for (let h of h1) {
//     console.log(h);
// }


// - змінити цей текст використовуючи селектори id, class,  tag

// content.innerHTML = 'sesese';

// console.log(content);
// for (let rule of rules) {
//     rule.innerHTML = 'sabrinaa';
//     console.log(rule);
// };
// for (let h of h1) {
//     h.innerHTML = 'netuda';
//     console.log(h);
// }

// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag

// content.innerHTML = 'sesese';
// content.style.width = '300px';
// content.style.height = '300px';

// console.log(content);
// for (let rule of rules) {
//     rule.innerHTML = 'sabrinaa';
//     console.log(rule);
//     rule.style.width = '300px';
//     rule.style.height = '300px';
// };
// for (let h of h1) {
//     h.innerHTML = 'netuda';
//     console.log(h);
//     h.style.width = '300px';
//     h.style.height = '300px';
// }


// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені

// let table = document.createElement('table');
// let tr = document.createElement('tr');
// let tr1 = document.createElement('tr');
// let tr2 = document.createElement('tr');
// table.style.backgroundColor = 'red';
// table.style.width = '300px';
// document.body.appendChild(table);
// table.appendChild(tr);
// table.appendChild(tr1);
// table.appendChild(tr2);
// tr.innerHTML = 'sekuro';
// tr1.innerHTML = 'diro';
// tr2.innerHTML = 'rantouro';

// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені



// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt

// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
//  - знайти всі елементі, які мають class
//  - знайти всі параграфи ,та змінити текст на hello oktenweb!
//  - знайти всі div та змінити ім колір на червоний