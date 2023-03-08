"use strict";

Function.prototype.defer = function (ms) {
  const context = this;
  return (...args) => setTimeout(() => context.apply(this, args), ms);
};

function f(a, b) {
  console.log(a + b);
}

f.defer(1000)(1, 2);
