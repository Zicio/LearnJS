"use strict";

const truncate = (str, maxlength) => {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1).padEnd(maxlength, "…");
  }
  return str;
};

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(truncate("Всем привет!", 20));
