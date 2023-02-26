"use strict";

const getDateAgo = (date, days) => {
  date.setDate(date.getDate() - days);
  return date.getDate();
};

console.log(getDateAgo(new Date(2015, 0, 2), 1));
console.log(getDateAgo(new Date(2015, 0, 2), 2));
console.log(getDateAgo(new Date(2015, 0, 2), 365));
