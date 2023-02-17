"use strict";

const multiplyNumeric = (obj) => {
  for (let elem of Object.keys(obj)) {
    typeof obj[elem] === "number" && (obj[elem] *= 2);
  }
};
