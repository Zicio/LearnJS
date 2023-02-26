"use strict";

const getMaxSubSum = (arr) => {
  let max = 0;
  let intermediateMax = 0;
  for (let elem of arr) {
    intermediateMax = Math.max(elem, intermediateMax + elem);
    max = Math.max(max, intermediateMax);
  }
  return max;
};

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([1, 2, 3]));
console.log(getMaxSubSum([-1, -2, -3]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
