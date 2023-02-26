"use strict";

const camelize = (arr) => {
  return arr
    .split("-")
    .map((el, index) => {
      return index !== 0 ? el[0].toUpperCase() + el.slice(1) : el;
    })
    .join("");
};

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
