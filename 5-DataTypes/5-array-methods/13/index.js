"use strict";

/*const groupById = (arr) => {
  const result = {};
  for (let item of arr) {
    result[item.id] = item;
  }
  return result;
};*/

const groupById = (arr) => {
  return arr.reduce((accumulator, currentValue) => {
    accumulator[currentValue.id] = currentValue;
    return accumulator;
  }, {});
};

let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

console.log(groupById(users));
