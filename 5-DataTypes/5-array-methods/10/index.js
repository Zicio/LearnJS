"use strict";

const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

console.log(shuffle([1, 2, 3]));
