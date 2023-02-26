"use strict";

const getAverageAge = (users) =>
  users.reduce(
    (accumulator, currentValue) => accumulator + currentValue.age,
    0
  ) / users.length;

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

console.log(getAverageAge([vasya, petya, masha]));
