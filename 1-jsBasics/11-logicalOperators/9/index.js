"use strict";

const login = prompt("Введите логин", "");
if (login === "Админ") {
  const password = prompt("Введите пароль", "");
  if (password && password === "Я главный") {
    alert("Здравствуйте");
  } else if (password === "" || password === null) {
    alert("Отменено");
  } else {
    alert("Неверный пароль");
  }
} else if (login === "" || login === null) {
  alert("Отменено");
} else {
  alert("Я вас не знаю");
}
