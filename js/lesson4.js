
// Створіть карточки товару з масиву використовуючи createElement

// import cars from './date/cars.js';

// const ulEl = document.querySelector('.js-goods');

// const addNewCarEl = ({name, img, price, description})  => {

//     const carsLi = document.createElement('li');

//     const carsTitle = document.createElement('h2');
//     carsTitle.textContent = name;

//     const carsImg = document.createElement('img');
//     carsImg.src = img;
//     carsImg.alt = name;
//     carsImg.width = 300;

//     const carsPrice = document.createElement('p');
//     carsPrice.textContent = price;

//     const carsDescription = document.createElement('p');
//     carsDescription.textContent = description;

//     carsLi.append(carsTitle, carsImg, carsPrice, carsDescription);

//     return carsLi;
// }

// const newCarEl = cars.map(addNewCarEl);
// console.log(newCarEl);

// ulEl.append(...newCarEl);

// console.log(ulEl);



// ЗАДАЧА 2
// 2.1НАПИШІТЬ КАЛЬКУЛЯТОР, ЯКИЙ БУДЕ РАХУВАТИ ЦІНУ ШАШЛИКА, В ЗАЛЕЖНОСТІ ВІД ЦІНИ ЗА КІЛОГРАМ І КІЛЬКОСТІ КУПЛЕНОГО ПРОДУКТА , І БУДЕ ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН,
// html/

// const refs = {
//     priceEl: document.querySelector("#price"),
//     quanlityEl: document.querySelector("#quantity"),
//     totalEl: document.querySelector(".total"),
//     formEl: document.querySelector(".form"),
//     amountEl: document.querySelector(".amount"),
//     containerEl: document.querySelector(".container"),
// }
// //console.log(refs);
// function calculator(e) {
//     e.preventDefault();
//     const price = refs.priceEl.value;
//     const quanlity = refs.quanlityEl.value;
//     const total = price * quanlity;
//     refs.totalEl.textContent = total;
//     refs.amountEl.textContent = quanlity;
//     //return total;
// };

// window.addEventListener("DOMContentLoaded", calculator);
// refs.formEl.addEventListener("submit", calculator);

//  //2.2 ПЕРЕПИШІТЬ КОД , ЩОБ ЗНАЧЕННЯ МИ ОТРИМУВАЛИ ПО КЛІЦІ НА КНОПКУ , 
//  //ПРИ НАЖАТТІ ЯКОГО БУДЕ ВАМ РАХУВАТИ ТА ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН < button class="btn" > Calculate</ >  

// function change() {
//     const price = refs.priceEl.value;
//     const quanlity = refs.quanlityEl.value;
//     refs.amountEl.textContent = quanlity;
// }
// refs.quanlityEl.addEventListener("input", change);

// //2.3 НАПИШІТЬ  РАНДОМНИЙ КОЛІР ДЛЯ НАШОЇ ФОРМИ КОЛЬКУЛЯТОРА
// // ЗА ДОПОМОГОЮ ІНЛАЙНОВОГО СТИЛЮ

// const randomRgbColor = () => {
//   const r = Math.round(Math.random() * (255 - 1) + 1);
//   const g = Math.round(Math.random() * (255 - 1) + 1);
//   const b = Math.round(Math.random() * (255 - 1) + 1);
//   return `rgb(${r},${g},${b})`;
// };

//refs.containerEl.style.backgroundColor = randomRgbColor();


// ЗАДАЧА 3
// 3.1 Є МАСИВ, ПОТРІБНО СТВОРИТИ РОЗМІТКУ ІЗ ТИХ КАРТОК через 

const instruments = [{
  id: 1,
  img: "https://content.rozetka.com.ua/goods/images/big/13664457.jpg",
  name: "Молоток",
  price: 150
},
{
  id: 2,
  img: "https://machtz.com.ua/files/resized/products/dsc_2898_new.800x550.jpg",
  name: "Перфоратор",
  price: 3000
},{
  id: 3,
  img: "https://content2.rozetka.com.ua/goods/images/big_tile/232653359.jpg",
  name: "Рівень",
  price: 2000
}]

const cardEl = document.querySelector('.js-list');

function makeInstrumentsArray () {
const instr = instruments.map(({id, img, name, price}) => {
    return `
    <li data-id="${id}">
    <img src="${img}" alt="${name}" width='300'>
    <h2>${name}</h2>
    <p>${price}</p>
    </li>    
    `
}).join(' ');
cardEl.insertAdjacentHTML('beforeend', instr) 
};
makeInstrumentsArray();

//3.2 ДОБАВТЕ КНОПКУ, ЧЕРЕЗ ЯКУ МИ КУПЛЯТИМЕМО ТОВАР


// ЗАДАЧА 4
// ПОТРІБНО СТВОРИТИ Ф-ЦІЮ , ЯКА БУДЕ ШУКАТИ НАРЦИСА.ГОЛОВНА УМОВА НАРЦИСА ЗНАЮТЬ УСІ , НАРЦИС НЕ ЗНАЄ НІКОГО
// є елемент масиву , який незнає нікого
// якщо не одна така людина , то вертаємо not found
// якщо один , то перевірити , чи його знають усі люди, якщо так то вертаємо found