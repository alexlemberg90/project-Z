// Треба реалізувати свій розпорядок дня. 
// Колбеками, промісами та асинк авейт.

// В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання. 
// Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби 
// і т.д.

// Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають. 
// Якщо ж все ок, то ви маєте прожити свій звичайний день.
// Кожна подія має бути з рандомною (не по зростанню) затримкою.

// встати
// душ
// поїв
// зібрав дитину
// завіз в сад
// пішов на маршрутку
// пішов на роботу
// вийшов з роброти
// повечеряв
// ліг спати

function wakeUp(alarm,cb) {
setTimeout(() => {
    if (alarm) {
       cb();   
     return    
    };
   console.error('Блін проспав!!!');
}, 2000)};

wakeUp(true,()=>{
    console.log('Добрий Ранок');
    shower(false);
});

function shower(water) {
    setTimeout(() => {
        if (water) {
           console.log('Прийняв душ');
           eat(true);
           return
        }
        console.log('Ех знов нема води');
    }, 1000);
};

function eat(food) {
    setTimeout(() => {
        if (food) {
            console.log('Ммм було смачно');
            return
        }
        console.log('йомайо знов нема дошика');
    }, 500);
};
function d(params) {
    
}

