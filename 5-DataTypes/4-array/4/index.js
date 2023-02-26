"use strict";

const sumInput = () => {
  const arr = [];
  while (true) {
    const value = prompt("Введите число", "0");
    if (value === "" || value === null || !isFinite(value)) break;

    arr.push(+value);
  }
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};

alert(sumInput());
