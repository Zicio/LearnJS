"use strict";

const unique = (arr) => {
  const result = [];
  for (let item of arr) {
    !result.includes(item) && result.push(item);
  }
  return result;
};

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

console.log(unique(strings));
