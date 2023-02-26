"use strict";

function Calculator() {
  this.read = () => {
    this.x = +prompt("Введите первое значение", "0");
    this.y = +prompt("Введите второе значение", "0");
  };

  this.sum = () => {
    return this.x + this.y;
  };

  this.mul = () => {
    return this.x * this.y;
  };
}

const calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());
