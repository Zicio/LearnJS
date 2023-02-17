"use strict";

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const sum = Object.values(salaries).reduce(
  (accum, currentValue) => accum + currentValue,
  0
);
