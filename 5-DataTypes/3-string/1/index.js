"use strict";

const ucFirst = (str) => `${str[0]?.toUpperCase()}${str.slice(1)}`;

console.log(ucFirst("vasya"));
console.log(ucFirst(""));