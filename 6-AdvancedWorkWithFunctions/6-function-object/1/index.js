"use strict";

const makeCounter = () => {
  let count = 0;
  const counter = () => {
    return count++;
  };

  counter.set = (value) => {
    count = value;
  };

  counter.decrease = () => {
    count--;
  };
  return counter;
};

let counter = makeCounter();
counter.set(5);
counter.decrease();

console.log(counter());
console.log(counter());
