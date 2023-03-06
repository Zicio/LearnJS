"use strict";

/*const printNumbers = (from, to) => {
  let current = from;
  const handler = () => {
    current <= to ? console.log(current) : clearInterval(timer);
    current++;
  };
  handler();
  const timer = setInterval(handler, 1000);
};*/

/*const printNumbers = (from, to) => {
  let current = from;
  console.log(current);
  current++;
  setTimeout(function handler() {
    console.log(current);
    if (current < to) {
      setTimeout(handler, 1000);
      current++;
    }
  }, 1000);
};*/

printNumbers(1, 5);
