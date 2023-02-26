"use strict";

const sortByAge = (users) => users.sort((a, b) => a.age - b.age);

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
console.log(sortByAge([vasya, petya, masha]));
