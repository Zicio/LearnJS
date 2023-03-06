"use strict";

function delay(func, ms) {
  return (...args) => {
    setTimeout(() => func.apply(this, args), ms);
  };
}

function f(x) {
  console.log(x);
}

let f1000 = delay(f, 1000);
let f2000 = delay(f, 2000);

f1000("test1");
f2000("test2");
