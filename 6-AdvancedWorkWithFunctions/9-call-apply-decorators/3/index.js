"use strict";

function debounce(func, ms) {
  let funcCooldown = false;
  return (...args) => {
    if (funcCooldown) {
      return;
    }
    func.apply(this, args);
    funcCooldown = true;
    setTimeout(() => {
      return (funcCooldown = false);
    }, ms);
  };
}

function func(x) {
  console.log(x);
}

let f = debounce(func, 1000);
f(1);
f(2);

setTimeout(() => f(3), 100);
setTimeout(() => f(4), 1100);
setTimeout(() => f(5), 1500);
