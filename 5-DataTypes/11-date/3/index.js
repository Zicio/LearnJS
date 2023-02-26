"use strict";

const getLocalDay = (date) => {
  const day = date.getDay();
  return day === 0 ? 7 : day;
};

console.log(getLocalDay(new Date(2012, 0, 1)));
console.log(getLocalDay(new Date(2012, 0, 3)));
