"use strict";

const filterRange = (arr, a, b) => {
  return arr.filter((value) => value >= a && value <= b);
};

console.log(filterRange([5, 3, 8, 1], 1, 4));
