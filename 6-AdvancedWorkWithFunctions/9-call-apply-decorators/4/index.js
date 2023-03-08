"use strict";

function throttle(func, ms) {
  let coolDown = false;
  let preThis = null;
  let preArgs = null;
  const wrapper = (...args) => {
    if (coolDown) {
      preThis = this;
      preArgs = args;
      return;
    }
    func.apply(this, args);
    coolDown = true;
    setTimeout(() => {
      coolDown = false;
      if (preArgs) {
        func.apply(preThis, preArgs);
        preThis = null;
        preArgs = null;
      }
    }, ms);
  };
  return wrapper;
}

function f(a) {
  console.log(a);
}

let f1000 = throttle(f, 1000);
f1000(1);
f1000(2);
f1000(3);
f1000(4);
