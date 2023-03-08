"use strict";

let hamster = {
  stomach: null,

  eat(food) {
    this.stomach = food;
  },
};

let speedy = {
  __proto__: hamster,
};

let lazy = {
  __proto__: hamster,
};

speedy.eat("apple");
console.log(speedy.stomach);

console.log(lazy.stomach);
