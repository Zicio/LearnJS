"use strict";

class Calculator {
  methods = {
    "+": (a, b) => a + b,
  };

  calculate(str) {
    const [value1, operator, value2] = str.split(" ");
    try {
      return this.methods[operator](+value1, +value2);
    } catch (err) {
      return err.message;
    }
  }

  addMethod(name, func) {
    this.methods[name] = func;
  }
}

let calc = new Calculator();

console.log(calc.calculate("3 + 7"));

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

console.log(powerCalc.calculate("2 ** 3"));
console.log(powerCalc.calculate("2 * 3"));
console.log(powerCalc.calculate("2 ( 3"));
