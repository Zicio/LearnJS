"use strict";

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = () => {
    this.value += +prompt("Введите новое число", "0");
  };
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);
