//1 - присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false Вывести каждую при помощи console.log , alert, document.write
// let gretteng = 'hello';
// let name = 'owu';
// let name2 = 'com';
// let name3 = 'ua';
// let one = 1;
// let ten = 10;
// let numb = -999;
// let notage = 123;
// let what = 3.14;
// let i = 2.7;
// let age = 16;
// let me = true;
// let bullshit = false;

// console.log(gretteng,name,name2,name3);
// alert(one);
// alert(ten);
// alert(numb);
// alert(what);
// alert(i);
// document.write(notage);
// document.write('<br>');
// document.write(age);
// document.write('<br>');
// document.write(me);
// document.write('<br>');
// document.write(bullshit);

//2 - переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log , alert, document.write

// gretteng = 'hello';
// name = 'my';
// name2 = 'dear';
// name3 = 'friend';
// one = 1;
// ten = 2;
// numb = 3;
// notage = 'who';
// what = 'lets';
// i = 'started';
// age = 'are';
// me = 'you';
// bullshit = '?';

// console.log(gretteng,name,name2,name3);
// alert(one);
// alert(ten);
// alert(numb);
// alert(what);
// alert(i);
// document.write(notage);
// document.write('<br>');
// document.write(age);
// document.write('<br>');
// document.write(me);
// document.write('<br>');
// document.write(bullshit);

//3 - Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write

// const name = 'Olexiy';
// const surname = 'Rostislavovich';
// const lastname = 'Buchko';
// const age = 30;
// const weight = 102;
// const growth = 175;

// console.log(name,surname,lastname);
// alert(age);
// document.write(weight);
// document.write('<br>');
// document.write(growth);

//4 - при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write

// lastname = prompt('lastname');
// name = prompt('name');
// surname = prompt('surname');

// console.log(lastname);
// alert(name);
// document.write(surname);

//5 - Взять переменные из задания 4 и сконкатенировать их в одной переменной person.

// let person = (lastname + name + surname);

// console.log('I am - '+ person);

// 6- Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.
// lastname = prompt('lastname');
// name = prompt('name');
// surname = prompt('surname');
// wifelastname = prompt('lastname your wife');
// wifename = prompt('name your wife');
// wifesurname = prompt('surname your wife');
// daughterlastname = prompt('lastname your daughter');
// daughtername = prompt('name your daughter');
// daughtersurname = prompt('surname your daughter');

// let person = (lastname + name + surname);
// let wifeperson = (wifelastname + wifename + wifesurname);
// let daughterperson = (daughterlastname + daughtername + daughtersurname);

// console.log('I am - '+ person);
// console.log('My wife - '+ wifeperson);
// console.log('My daughter - '+ daughterperson);

// 7- при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.

// let one = +prompt('one');
// let five = +prompt('five');
// let ten = +prompt('ten');

// console.log(one + five + ten);



// - При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль let a = 100; let b = '100'; let c = true; let d = undefined;

// let a = 100;
// let b = '100';
// let c = true;
// let d = undefined;

// console.log(typeof a,typeof b,typeof c,typeof d);

// - Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
//  В одинаковых выражениях в задании не использовать два одинаковых оператора.
// Каждое выражение вложить в свою переменную
    // 5 ? 6 -> true
    // 5 ? 6 -> false
    // 5 ? 6 -> false
    // 5 ? 6 -> false
    // 10 ? 10 -> true
    // 10 ? 10 -> true
    // 10 ? 10 -> false
    // 10 ? 10 -> false
    // 10 ? 10 -> false
    // 123 ? '123' -> false
    // 123 ? '123' -> true

// let a = 5 < 6 ;
// let b = 5 > 6;
// let c = 5 == 6;
// let d = 5 >= 6;
// let e = 10 == 10;
// let f = 10 >= 10;
// let g = 10 > 10;
// let h = 10 < 10;
// let i = 10 !== 10;
// let j = 123 === '123';
// let k = 123 == '123';

// console.log(a,b,c,d,e,f,g,h,i,j,k)

// Дополнительно:
// - Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль
// console.log(132 > 100 && 45 < 12 );false
// console.log(34 > 33 && 23 < 90 );true
// console.log(99 > 100 && 45 > 12 );false
// console.log(132 > 100 || 45 < 12 );false
// console.log(111 > 11 || 45 < 111 );true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));false
// console.log(!!'-1');true
// console.log(!!-1);true
// console.log(!!'0');true
// console.log(!!'null');true
// console.log(!!'undefined');true
// console.log(!!(3/'owu'));false
// console.log((111 > 11 || 45 < 111) ||  !!'0');true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));false

