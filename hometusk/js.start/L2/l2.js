// 1--створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу

// const str = ['Alex','Igor','Anton','Andriy','Oleg'];
// const num = [1,2,3,4,5];
// const all = [1,2,'Alex',true,false];

// console.log(str);
// console.log(num);
// console.log(all);

//2 -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// const sum = [];

// sum[0] = 'Alex';
// sum[2] = 1;
// sum[1] = 2;
// sum[3] = true;
// sum[4] = {};

// console.log(sum);

//3 - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let index = 0; index < 10; index++) {
//     document.write('<div>asd</div>');   
// }

//4 - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//        document.write('<div>asd</div>');
//        document.write('<hr>');
//        document.write([i]);   
//  }

//5 - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let block = 0;

// while (block < 20) {
//     document.write('<h1>Alex</h1>','<hr>');
//     block++
// }

//6 - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let block = 0;

// while (block < 20) {
//     document.write('<h1>Alex</h1>');
//     document.write([block],'<hr>');
//     block++
// }

//7 - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// const num = [1,2,3,4,5,6,7,8,9,10];

// for (let i = 0; i < 10; i++) {
//        console.log(num[i]);

//  }

//8 - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// const str = ['Alex','Igor','Anton','Andriy','Oleg','Vanya','Viktor','Sergiy','Masha','Gala'];

// for (let i = 0; i < 10; i++) {
//        console.log(str[i]);

//  }

//9 - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// const all = [1,2,'Alex',true,false,{},3,4,'Den',5];

// let i = 0;

// while (i < all.length) {
//     console.log(all[i]);
//     i++
// }

//10 - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// const all = [1,2,'Alex',true,false,{},3,4,'Den',5];


// for (let i = 0; i < all.length; i++) {  
//      if(typeof all[i] === "boolean"){
//        console.log(all[i]);
//     };
//  };

//11 - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// const all = [1,2,'Alex',true,false,{},3,4,'Den',5];


// for (let i = 0; i < all.length; i++) {  
//      if(typeof all[i] === "number"){
//        console.log(all[i]);
//     };
//  };

//12 - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// const all = [1,2,'Alex',true,false,{},3,4,'Den',5];


// for (let i = 0; i < all.length; i++) {  
//      if(typeof all[i] === "string"){
//        console.log(all[i]);
//     };
//  };

//13 - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// const empty = [];

// empty[0] = 1;
// empty[1] = 2;
// empty[2] = "one";
// empty[3] = "two";
// empty[4] = true;
// empty[5] = false;
// empty[6] = {};
// empty[7] = 3;
// empty[8] = 4;
// empty[9] = 'where';

// for (let index = 0; index < empty.length; index++) {
//     console.log(empty[index]);
    
// };

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let index = 0; index < 10; index++) {
//    console.log(index);
//     document.write(index);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let index = 0; index < 100; index++) {
//    console.log(index);
//     document.write(index);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let index = 0; index < 100; index+= 2) {
//    console.log(index);
//     document.write(index);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let index = 1; index < 100; index+= 2) {
//     console.log(index);
//      document.write(index);
//  };

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let index = 0; index < 100; index+= 2) {
//    console.log(index);
//     document.write(index);
// };

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

// let sec = 1;
// let min = 0;
// for (; sec <= 60; sec++) {
//   if (sec == 60) {
//     min++;
//     sec = 0;
//   } else if (min == 2) {
//     break;
//   };
//   console.log("min: "+ min,"sec: "+sec);
// };

// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

// const timer = 59;
// let h = 0;
// let min = 0;
// let sec = 0;




//    for (let i = 0; i <= 3 ; i++) {
       
//        if (h < 3) {
//             for (let i = 0; i <= timer; i++) {
//          console.log('min :', min++);
//       for (let i = 0; i <= timer; i++) {
//         //console.log('sec :', sec++);
//         sec++;
//     };
//     sec = 0;
//        };
//     min = 0;
//   }else if (h === 2 && min === 20){
//       break;
//   };
//   console.log("hour: ", h); 
//     };
