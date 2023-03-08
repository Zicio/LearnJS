"use strict";

// Можем, если prototype по-умолчанию не был изменен

function Animal(type) {
  this.type = type;
}

const bear = new Animal("bear");
const sparrow = new bear.constructor("sparrow");
console.log(bear.type);
console.log(sparrow.type);

Animal.prototype = {};
const wolf = new Animal("wolf");
const chicken = new wolf.constructor("chicken");
console.log(wolf.type);
console.log(chicken.type);
