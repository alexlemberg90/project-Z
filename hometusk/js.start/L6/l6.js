
// - создать массив с 20 числами.

// let numbs = [1,2,23,34,654,756,12,32,333,44,18,98,5,233,56,7686,98765,2323,5433,300];

// -- при помощи метода sort и колбека  отсортировать массив.

// let sorts = numbs.sort((a,b) => a - b);
// console.log(sorts);

//-- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

// let sorts = numbs.sort((a,b) => b - a);
// console.log(sorts);

// -- при помощи filter получить числа кратные 3

// let fil = numbs.filter((a) => {
//     if (a % 3 === 0) {
//         return a;
//     };
// });
// console.log(fil);

// -- при помощи filter получить числа кратные 10

// let fil = numbs.filter((a) => {
//     if (a % 10 === 0) {
//         return a;
//     };
// });
// console.log(fil);


// -- перебрать (проитерировать) массив при помощи foreach()

//  each = numbs.forEach( (val,i)=> {
//     console.log(val,i);
//  });

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

// let maps = numbs.map((num)=>{
// return num *3;
// });
// console.log(maps);
// - создать массив со словами на 15-20 элементов.

// let words = ['Whene','Alex','dont','USA','NaN','Numbers','String','Null','undf','Boll','Zevs','I','do','some','But','who','are'];

// -- отсортировать его по алфавиту в восходящем порядке.

// let sorts = words.sort();
// console.log(sorts);

// -- отсортировать его по алфавиту  в нисходящем порядке.

// let sorts = words.sort((a,b) => a > b ? -1 : 1);
// console.log(sorts);

// -- отфильтровать слова длиной менее 4х символов

// let filt = words.filter((a)=>{
//     if (a.length < 4 ) {
//         return a; };
// })
// console.log(filt);
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

// let maps = words.map((word)=>{
//     return word +'!';
// });
// console.log(maps);

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
// let users = [ 
// {name: 'vasya', age: 31, status: false},
//  {name: 'petya', age: 30, status: true},
//   {name: 'kolya', age: 29, status: true},
//    {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//      {name: 'anya', age: 31, status: false},
//       {name: 'oleg', age: 28, status: false},
//        {name: 'andrey', age: 29, status: true},
//         {name: 'masha', age: 30, status: true},
//          {name: 'olya', age: 31, status: false},
//           {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)

// let sorts = users.sort((a,b)=> a.age - b.age)
// console.log(sorts); 

// let sorts = users.sort((a,b)=> b.age - a.age)
// console.log(sorts); 
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// let sorts = users.sort((a,b)=> a.name.length - b.name.length);
// console.log(sorts);

// let sorts = users.sort((a,b)=> b.name.length - a.name.length);
// console.log(sorts);

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)

// let saveUsers = JSON.parse(JSON.stringify(users));
// let newUsers = [];

// let maps = users.map((user,index)=>{
//  return user.id = Math.floor(Math.random()*100*index);    
// });

// console.log(users);
// console.log(saveUsers);
// - відсортувати його за індентифікатором

// let sortID = users.sort((a,b)=> a.id - b.id);
// console.log(sortID);

// -- наисать функцию калькулятора с 2мя числами и колбеком

// function calc(num1,num2,arg,callback) {
//     return callback(num1,num2,arg)
// }
// let result = calc(10,2,'-',(num1,num2,arg)=> {
//     if (arg == '*') {
//         return num1 * num2;
//     };
//     if (arg == '/') {
//         return num1 / num2;
//     };
//     if (arg == '-') {
//         return num1 - num2;
//     };
//     if (arg == '+') {
//         return num1 + num2;
//     };
// })
// console.log(result);
// -- наисать функцию калькулятора с 3мя числами и колбеком

// function calc(num1,num2,num3,arg,arg2,callback) {
//     return callback(num1,num2,num3,arg,arg2)
// }
// let result = calc(10,2,10,'-','-',(num1,num2,num3 ,arg,arg2)=> {
//     if (arg == '*' && arg2 == '*') {
//         return num1 * num2 * num3;
//     }else if (arg == '*' && arg2 == '-') {
//         return num1 * num2 - num3;
//     }else if (arg == '*' && arg2 == '+') {
//         return num1 * num2 + num3;
//     }else if (arg == '*' && arg2 == '/') {
//         return num1 * num2 / num3;
//     }else if (arg == '+' && arg2 == '*') {
//         return num1 + num2 * num3;
//     }else if (arg == '+' && arg2 == '+') {
//         return num1 + num2 + num3;
//     }else if (arg == '+' && arg2 == '-') {
//         return num1 + num2 - num3;
//     }else if (arg == '+' && arg2 == '/') {
//         return num1 + num2 / num3;
//     }else if (arg == '-' && arg2 == '*') {
//         return num1 - num2 * num3;
//     }else if (arg == '-' && arg2 == '/') {
//         return num1 - num2 / num3;
//     }else if (arg == '-' && arg2 == '-') {
//         return num1 - num2 - num3;
//     }else if (arg == '-' && arg2 == '+') {
//         return num1 - num2 + num3;
//     }else if (arg == '/' && arg2 == '*') {
//         return num1 / num2 * num3;
//     }else if (arg == '/' && arg2 == '/') {
//         return num1 / num2 / num3;
//     }else if (arg == '/' && arg2 == '-') {
//         return num1 / num2 - num3;
//     }else if (arg == '/' && arg2 == '+') {
//         return num1 / num2 + num3;
//     };
// })
// console.log(result);

// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================

// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

class cars {
    constructor(producers,powers,drivers,prices,years){
        this.producer = producers
        this.power = powers
        this.driver = drivers
        this.price = prices
        this.year = years
    };
};

// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.

// Пример:
// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.