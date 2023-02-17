"use strict";

const x = prompt("Введите x", "0");
const n = prompt("Введите n", "0");
const pow = (x, n) => {
  return x ** n;
};
alert(pow(x, n));
