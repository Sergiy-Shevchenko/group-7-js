// ЗАДАЧА 1
// БАЗОВІ ОПЕРАЦІЇ З МАСИВОМ
// 1)створіть масив styles з елементами «Джаз» і «Блюз»
// 2)добавте «Рок-н-ролл» в кінець
// 3)замініть значення в середині на «Классика»
// 4)видаліть перший елемент і виведіть його в консоль
// 5)вставте «Рэп» і «Регги» на початок масиву

// МАСИВ ПО ХОДІ ВИПОВНЕННЯ ОПЕРАЦІЇ
// Джаз, Блюз
// const array = ["Джаз", "Блюз"];
// console.log(array);

// // Джаз, Блюз, Рок-н-ролл
// array.push("Рок - н - ролл");
// console.log(array);

// // Джаз, Классика, Рок-н-ролл
// array.splice(1, 1, "Классика");
// console.log(array);

// // Классика, Рок-н-ролл
// // array.shift();
// const delElement = array.shift();
// console.log(delElement);
// console.log(array);

// // Рэп, Регги, Классика, Рок-н-ролл
// array.unshift("Рэп", "Регги");
// console.log(array);

// ЗАДАЧА 2
// Напишіть ф-цію logItems(array) , яка буде получати масив і використовуючи цикл for , який для кожного елемента масива буде виводити в консоль
// повідомлення у форматі <індекс елемента> та <значення елемента>.
// Номерація для кожного елемента масива ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.
//const array = [];
//

//function logItems(array) {
  //for (let i = 0; i < array.length; i += 1) {
    //console.log(i, array[i]);
 // }
  //eturn array;
//}
//logItems(["Mango", "Poly", "Ajax"]);


// ЗАДАЧА 3
// Напишіть код , який шукає саме найменше число в масиві
// 1) напишіть циклом for
// const numbers = [2, 17, 94, 1, 23, 37];
// let minNumber = Infinity;

// for (let number of numbers) {
//   if (minNumber > number) {
//     minNumber = number;
//   }
  
// }
// console.log(minNumber);

// 2) перепишіть функцією findSmallestNumber(numbers)
// function findSmallestNumber(numbers) {
//   let minNumber = Infinity;

// for (let number of numbers) {
//   if (minNumber > number) {
//     minNumber = number;
//   }
  
//   }
//   return minNumber;
// }
//  console.log(findSmallestNumber([2, 17, 94, 1, 23, 37]));
// console.log(findSmallestNumber([49, 4, 83, 7, 12]));

// ЗАДАЧА 4
//  Провірте , чи являється рядок полідромом

 const str = "ротатор";//true
 const newString = "Hello";//false

const newArray = str.split("").reverse().join("");

console.log(newArray);

console.log(str === newArray);

const dublArray = newString.split("").reverse().join("");

console.log(dublArray);

console.log(newString === dublArray);

