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

//  const str = "ротатор";//true
//  const newString = "Hello";//false

// const newArray = str.split("").reverse().join("");

// console.log(newArray);

// console.log(str === newArray);

// const dublArray = newString.split("").reverse().join("");

// console.log(dublArray);

// console.log(newString === dublArray);

// ЗАДАЧА 5
// Напишіть ф - цію calculateAverage() яка приймає довільну
// кількість аргументів і повертає їх середнє значення.
// Всі аргументи будуть тільки числовими
// function calculateAverage() {
//   // console.log(arguments)
//   const numberArguments = Array.from(arguments);
//   console.log(numberArguments);

//   let avaregeNumber = 0;
//   for (let argument of numberArguments) {
//     avaregeNumber += argument;
//   }
//   const totalSum = avaregeNumber / numberArguments.length;

//   console.log(avaregeNumber);

//   return totalSum;
// }

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36));// 23.2

// ЗАДАЧА 6
// Напишіть ф-цію greet(name) , яка при виклику буде получати імя (як приклад , "Василь"), і логінувати рядок "Привіт, <імя>".У випадку , відсутнього
// відсутнього значення, виводе аргумент "Привіт , гість"

// function greet(name = "гість") {
//   return `Привіт, ${name}`;
// }

// console.log(greet("Василь")); //Привіт Василь
// console.log(greet()); //Привіт гість

// ЗАДАЧА 7
// Виконайте рефакторинг замінивши обявлення ф-ції з function declaration на function expression та на стрілочну функцію

// function checkNumbers(a, b) {
//   if (a > b) {
//     return `число ${a} більше ${b}`;
//   }

//   return `число ${b} більше ${a}`;
// }

// const checkNumbers = (a, b) => {
//     if (a > b) {
//       return `число ${a} більше ${b}`;
//     }
//     return `число ${b} більше ${a}`;
// }

// const checkNumbers = (a, b) =>
//   a > b ? `число ${a} більше ${b}` : `число ${b} більше ${a}`;

// const checkNumbers = function (a, b) {
//   return a > b ? `число ${a} більше ${b}` : `число ${b} більше ${a}`;
// }

// ЗАДАЧА 8
// Напишіть ф-цію capitalize , яка буде приймати рядок і буде повертати новий рядок , де кожне слово буде з великої букви
// // capitalize('the quick brown fox')// 'The Quick Brown Fox '

// function capitalize(string) {
//   const element = string.split(" ");
//   const getArray = [];
//   console.log(element);
//   for (const i of element) {
//     const big = i[0].toUpperCase();
//     console.log(big);
//     const array = i.slice(1);
//     console.log(array);
//     const getString = `${big}${array}`;
//     getArray.push(getString);
//   }
//   return getArray.join(" ");
// }
// console.log(capitalize("the quick brown fox"));


// ЗАДАЧА 9
// Напишіть функцію для роботи з колекцією навчаючих курсів courses:

// addCourse(name) - добавляє курс у кінець колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName)- змінює імя на нове
// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// // addCourse("Express"); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// // addCourse("CSS"); // 'У вас уже є такий курс'
// // removeCourse("React"); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// // removeCourse("Vue"); // 'Курс з таким іменем не найдено'
// // updateCourse("Express", "NestJS"); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// console.log(courses);

// ЗАДАЧА 1
// Напишіть скрипт,для обєкта user в послідовності:

//  добавляє поле mood із значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення  premium на false
// виводить отримане обєкта user в форматі ключ:значення використовуючи  Object.keys() и for...of

//  const user = {
//    name: "Mango",
//    age: 20,
//    hobby: "html",
//    premium: true,
// };

// ЗАДАЧА 2
// У вас є обєкт , у якому зберігаються зарплати нашої команди.
// Напишіть код , для підрахунку всіх зарплат і збережіть результат в змінні sum
// Повинно получитись 390, якщо обєкт salaries пустий , то результат буде 0
// ЩОБ МОЖНА БУЛО ПЕРЕВИКОРИСТОВУВАТИ ЛОГІКУ, ТОМУ ПИШЕМО ФУНКЦІЮ


//  const salaries = {
//    John: 100,
//    Ann: 160,
//    Pete: 130,
//  };


//  ЗАДАЧА 3
// Створи обєкт calculator(калькулятор) з 3-ма методами:
// read()- запрошує 2 значення і зберігає їх як значення обєкта;
// sum() -повертає суму збережених значень; 
// mult() -перемножує значення збережені і повертає результат;

//  const calculator = {
//  a: null,
//  b: null,

//   read() {},

//   sum() {},

//   mult() {},
// };


// calculator.read();
// console.log(`sum`, calculator.sum());
// console.log(`mult`, calculator.mult());


//1. Напиши скрипт, который для объекта user,
//последовательно:
//1 добавит поле mood со значением 'happy'
//2 заменит hobby на 'skydiving'
//3 заменит значение premium на false
//4 выводит содержимое объекта users в фортмате
//ключ:значение используя Object.keys() и for...of

//2. У нас есть объект, в котором храняться зарплаты
//нашей команды
//Напишите код для сумирования всех зарплат и
//сохраните его результат в переменной sum.
//Если объект salaries пуст, то результат должен быть 0

const salaries = {
  Mango: 100,
  Poly: 160,
  Ajax: 1470,
};


//3. Напишите ф-цию calcTotalPrice(stones, stonesName),
//которая принимает массив объектов и
//строку с названием камня.
//Функция считает м возвращает общую стоимость камней
//с таким именем, ценой и количеством из объекта

const stones = [
  { name: "Изумруд", price: 1300, quantity: 4 },
  { name: "Бриллиант", price: 2700, quantity: 6 },
  { name: "Сапфир", price: 400, quantity: 7 },
  { name: "Щебень", price: 150, quantity: 100 },
];


//4. Создайте объект calculator с тремя методами
//read(a, b) - принимает два аргумента и сохраняет их
//как свойства объекта
//sum() возвращает сумму сохраненных значений
//mult() перемножает сохраненные значения и возвращает результат

// const calculator = {
//   read(a, b) {},
//   sum() {},
//   mult() {},
// };


//5.1 Напишите функцию updateObject, которая принимает объект и возвращает
//новый объект без указанных параметров
//Ожидаемый результат ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}


//6. Напишите функцию, которая принимает как параметр объект
//и формирует объекты в новом массиве в формате [key, value]

const user6 = {
  name: "John",
  surName: "Stones",
  age: 20,
  hobby: "tenis",
  haveCar: true,
  merried: false,
};



//7. Напиши скрипт управления личным кабинетом интернет банка
//Есть объект account в котором необходимо реализовать
//методы для работы с балансом и историей транзакций

//Типов транзакций всего два.
//Можно положить либо снять деньги со счета
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

//Каждая транзакция это объект со свойствамиЖ id, type, amount

const account = {
  //текущий баланс счёта
  balance: 0,

  //История транзакций
  transactions: [],

  //Метод создает и возвращает объект транзакций
  //Принимает сумму и тип транзакций
  createTransaction(type, amount) {
    return {
      type,
      amount,
    };
  },

  //Метод отвечающий за добавление суммы к балансу.
  //Принимает сумму транцакции.
//Вызывает createTransaction для создания объекта транзакции
  //после чего добавляет его в историю транзакций
  deposit(amount) {},

  //Метод отвечающий за снятие суммы с баланса.
  //Принимает сумму транцакции.
  //Вызывает createTransaction для создания объекта транзакции
  //после чего добавляет его в историю транзакций
  //Если amount больше чем текущий баланс, выводим сообщение о том,
  //что недостаточно средств на счету
  withdraw(amount) {},

  //Метод возвращает текущий баланс
  getBalance() {},

  //Метод ищет и возвращает объект транзакции по id
  getTransactionDetails(id) {},

  //Метод возвращает количество средств определенного типа
  //транзакции из всей истории транзакций
  getTransactionType(type) {},
};
