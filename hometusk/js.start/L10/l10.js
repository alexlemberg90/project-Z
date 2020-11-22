// Реалізувати друкарську машинку. 
// У вас є текст "Hello World".
// Ваша функція має друкувати цей текст по 1 симоволу в браузері. 
// КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
// Цим самим ви маєте симулювати написання даного тексту юзером. 
// Приклад: "Hello"
// Затримки: 
// H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)

let text = 'Hello World';
let div = document.createElement('div');
document.body.appendChild(div);
let random = Math.random()*(1000 - 100) +100;

function print(add) {
    return new Promise ((resolve) => {  
         setTimeout(() => {
        resolve(div.innerText = add[0]);
             }, random); 
 });

};
function print1(add) {
    return new Promise ((resolve) => {
         setTimeout(() => {
        resolve(div.innerText += add[1]);
             }, random); 
 });

};
function print2(add) {
    return new Promise ((resolve) => {
         setTimeout(() => {
        resolve(div.innerText += add[2]);
             }, random); 
 });

};
function print3(add) {
    return new Promise ((resolve) => {
         setTimeout(() => {
        resolve(div.innerText += add[3]);
             }, random); 
 });

};
function print4(add) {
    return new Promise ((resolve) => {
         setTimeout(() => {
        resolve(div.innerText += add[4]);
             }, random); 
 });

};
function print5(add) {
    return new Promise ((resolve) => {
         setTimeout(() => {
        resolve(div.innerText += add[5]);
             }, random); 
 });

};
function print6(add) {
    return new Promise ((resolve) => {
         setTimeout(() => {
        resolve(div.innerText += add[6]);
             }, random); 
 });

};
function print7(add) {
    return new Promise ((resolve) => {
         setTimeout(() => {
        resolve(div.innerText += add[7]);
             }, random); 
 });

};
function print8(add) {
    return new Promise ((resolve) => {
         setTimeout(() => {
        resolve(div.innerText += add[8]);
             }, random); 
 });

};
function print9(add) {
    return new Promise ((resolve) => {
         setTimeout(() => {
        resolve(div.innerText += add[9]);
             }, random); 
 });

};
function print10(add) {
    return new Promise ((resolve) => {
         setTimeout(() => {
        resolve(div.innerText += add[10]);
             }, random); 
 });

};

async function word() {
    const H = await print(text);
    const e = await print1(text);
    const l = await print2(text);
    const ll = await print3(text);
    const o = await print4(text);
    const slash = await print5(text);
    const W = await print6(text);
    const oo = await print7(text);
    const r = await print8(text);
    const lll = await print9(text);
    const d = await print10(text);
};
word();
