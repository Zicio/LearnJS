"use strict";

let value = 100;
while (value <= 100) {
  value = prompt("Введите число больше 100", "");
  if (value === null) {
    break;
  }
}
