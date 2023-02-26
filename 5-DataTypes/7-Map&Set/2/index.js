"use strict";

const aclean = (arr) => {
  const obj = {};
  for (let item of arr) {
    const newItem = item.toLowerCase().split("").sort().join("");
    obj[newItem] = item;
  }
  return Object.values(obj);
};

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));
