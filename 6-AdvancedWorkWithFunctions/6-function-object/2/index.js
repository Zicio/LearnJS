"use strict";

const sum = (x) => {
  let current = x;
  const func = (y) => {
    current += y;
    return func;
  };
  func.toString = () => {
    return current;
  };
  return func;
};

console.log(sum(1)(2)(3).toString());
