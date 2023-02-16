"use strict";

const num = prompt("Введите число", "0");
let result = [];
if (num < 2) {
  alert("Число должно быть больше 1");
}
first: for (let i = 2; i <= num; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      continue first;
    }
  }
  result.push(i);
}
alert(result);
