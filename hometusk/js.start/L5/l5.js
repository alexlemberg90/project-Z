// ==============================================
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================

// function Tag(name,info,attr) {
//     this.titleOfTag = name;
//     this.action = info;
//     this.attrs = attr;
// }

// let a = new Tag('a',"встановлює ссилку чи якір.",[{name: 'встановлює назву якоря в середині документа',href: 'задає адрес документа, на який потрібно перейти',download: 'пропонує скачати вказаний по ссилці файл'}]);
// let div = new Tag('div','є блочним елементом і призначений для виділення фрагмента документа з метою зміни виду вмісту',[{align:'Задає вирівнювання вмісту тега',title:'Додає вспливаючу підказку до вмісту тега'}]);
// let h1 = new Tag('h1','являє собою найбільш важливий заголовок першого рівня',[{align:'Оприділяє вирівнювання заголовка',id:'Вказує імя стильового ідентифікатора'}]);
// let span = new Tag('span','призначений для визначення стокових елементів документа',[{id:'Вказує імя стильового ідентифікатора',style:'Застосовується для визначення стилю елемента за допомогою правил CSS'}]);
// let input = new Tag('input','є одним з різнобічних елементів форми і дозволяє створювати різні елементи інтерфейсу і забезпечити взаємодію з користувачем',[{accept:'Встановлює фільтр на типи файлів, які ви можете відправити через поле завантаження файлів',alt:'Альтернативний текст для кнопки із зображенням'}]);
// let form = new Tag('form','встановлює форму на веб-сторінці',[{action:'Адреса програми або документа, який обробляє дані форми',name:'Імя форми'}]);
// let option = new Tag('option','визначає окремі пункти списку, що створюється за допомогою контейнера <select>',[{label:'Вказівка ​​мітки пункту списку',disabled:'Заблокувати для доступу елемент списку'}]);
// let select = new Tag('select','дозволяє створити елемент інтерфейсу у вигляді списку, а також список з одним або численним вибором',[{form:'Повязує список з формою',size:'Кількість відображуваних рядків списку'}]);


// console.log(select);
// ==============================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================

// class Tag{
//     constructor(name,info,attr) {
//     this.titleOfTag = name;
//     this.action = info;
//     this.attrs = attr;
//     };
// };

// let a = new Tag('a',"встановлює ссилку чи якір.",[{name: 'встановлює назву якоря в середині документа',href: 'задає адрес документа, на який потрібно перейти',download: 'пропонує скачати вказаний по ссилці файл'}]);
// let div = new Tag('div','є блочним елементом і призначений для виділення фрагмента документа з метою зміни виду вмісту',[{align:'Задає вирівнювання вмісту тега',title:'Додає вспливаючу підказку до вмісту тега'}]);
// let h1 = new Tag('h1','являє собою найбільш важливий заголовок першого рівня',[{align:'Оприділяє вирівнювання заголовка',id:'Вказує імя стильового ідентифікатора'}]);
// let span = new Tag('span','призначений для визначення стокових елементів документа',[{id:'Вказує імя стильового ідентифікатора',style:'Застосовується для визначення стилю елемента за допомогою правил CSS'}]);
// let input = new Tag('input','є одним з різнобічних елементів форми і дозволяє створювати різні елементи інтерфейсу і забезпечити взаємодію з користувачем',[{accept:'Встановлює фільтр на типи файлів, які ви можете відправити через поле завантаження файлів',alt:'Альтернативний текст для кнопки із зображенням'}]);
// let form = new Tag('form','встановлює форму на веб-сторінці',[{action:'Адреса програми або документа, який обробляє дані форми',name:'Імя форми'}]);
// let option = new Tag('option','визначає окремі пункти списку, що створюється за допомогою контейнера <select>',[{label:'Вказівка ​​мітки пункту списку',disabled:'Заблокувати для доступу елемент списку'}]);
// let select = new Tag('select','дозволяє створити елемент інтерфейсу у вигляді списку, а також список з одним або численним вибором',[{form:'Повязує список з формою',size:'Кількість відображуваних рядків списку'}]);


// console.log(select);

// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// let car = {model:'a7',creator:'Audi',gradyear:2019,maxSpeed:200,capacity:'20l'};

// let drive = () => console.log(`їдемо зі швидкістю ${car.maxSpeed} на годину`);
// let info = () => console.log(car);
// function increaseMaxSpeed (newSpeed) {
   
//     return car.maxSpeed + newSpeed;
// };
// function changeYear (newValue) {
//     return car.gradyear = newValue;
// };
// function addDriver (newdriver) {
//     car.driver = newdriver;
// }


// drive()
// info()
// let newMaxSpeed = increaseMaxSpeed (101)
// car.maxSpeed = newMaxSpeed;
// let newYear = changeYear (2020)
// let newDriver = addDriver({name:'Валєра',age:45,experience:20})
// console.log(car);


// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// function Car(someModel,someCreator,someGradyear,someMaxSpeed,someCapacity) {
//     this.model = someModel;
//     this.creator = someCreator;
//     this.gradyear = someGradyear;
//     this.maxSpeed = someMaxSpeed;
//     this.capacity = someCapacity;
// };

// let Audi = new Car('a7','audi',2019,200,'20l');

// let drive = () => console.log(`їдемо зі швидкістю ${Audi.maxSpeed} на годину`);
// let info = () => console.log(Audi);
// function increaseMaxSpeed (newSpeed) {
   
//     return Audi.maxSpeed + newSpeed;
// };
// function changeYear (newValue) {
//     return Audi.gradyear = newValue;
// };
// function addDriver (newdriver) {
//     Audi.driver = newdriver;
// };


// drive();
// info();
// let newMaxSpeed = increaseMaxSpeed (101);
// Audi.maxSpeed = newMaxSpeed;
// let newYear = changeYear (2020);
// let newDriver = addDriver({name:'Валєра',age:45,experience:20});
// console.log(Audi);

// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// class Car {
// constructor (someModel,someCreator,someGradyear,someMaxSpeed,someCapacity){
//     this.model = someModel;
//     this.creator = someCreator;
//     this.gradyear = someGradyear;
//     this.maxSpeed = someMaxSpeed;
//     this.capacity = someCapacity;
// };
// };

// let Audi = new Car('a7','audi',2019,200,'20l');

// let drive = () => console.log(`їдемо зі швидкістю ${Audi.maxSpeed} на годину`);
// let info = () => console.log(Audi);
// function increaseMaxSpeed (newSpeed) {
   
//     return Audi.maxSpeed + newSpeed;
// };
// function changeYear (newValue) {
//     return Audi.gradyear = newValue;
// };
// function addDriver (newdriver) {
//     Audi.driver = newdriver;
// };


// drive();
// info();
// let newMaxSpeed = increaseMaxSpeed (101);
// Audi.maxSpeed = newMaxSpeed;
// let newYear = changeYear (2020);
// let newDriver = addDriver({name:'Валєра',age:45,experience:20});
// console.log(Audi);

// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================

// class Popelyshka {
//     constructor (someName,someAge,someFootsize){
//         this.name = someName;
//         this.age = someAge;
//         this.footsize = someFootsize;
//     };
// };

//  let Popelyshka1 = new Popelyshka('Katia',25,37);
//  let Popelyshka2 = new Popelyshka('Sveta',24,37);
//  let Popelyshka3 = new Popelyshka('Olya',20,35);
//  let Popelyshka4 = new Popelyshka('Anya',22,36);
//  let Popelyshka5 = new Popelyshka('Natalya',26,38);
//  let Popelyshka6 = new Popelyshka('Ira',40,38);
//  let Popelyshka7 = new Popelyshka('Angelina',22,37);
//  let Popelyshka8 = new Popelyshka('Nadya',43,40);
//  let Popelyshka9 = new Popelyshka('Solomia',33,39);
//  let Popelyshka10 = new Popelyshka('Tanya',28,39);

//  let Castle = [Popelyshka1,Popelyshka2,Popelyshka3,Popelyshka4,Popelyshka5,Popelyshka6,Popelyshka7,Popelyshka8,Popelyshka9,Popelyshka10];
//  class Prince {
//      constructor(prName,prAge,someShoe){
//         this.name = prName;
//         this.age = prAge;
//         this.shoesize = someShoe;
//      };
//  };

//  let princ = new Prince('Alex',30,35);

//  function find(findShoe) {
//  for (let shoe of findShoe) {

// if (shoe.footsize === princ.shoesize) {
//     console.log(`Принц ${princ.name} знайшов свою попелюшку ${shoe.name}`);
// };
//      };
//  };

//  find(Castle);

// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================