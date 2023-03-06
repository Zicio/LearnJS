"use strict";

// С использованием цикла
/*const sumTo = (n) => {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
};*/

// Через рекурсию
/*const sumTo = (n) => {
  return n === 1 ? n : n + sumTo(n - 1);
};*/

// С использованием формулы арифметической прогрессии
/*const sumTo = (n) => {
  return (n * (n + 1)) / 2;
};*/

console.log(sumTo(4));
