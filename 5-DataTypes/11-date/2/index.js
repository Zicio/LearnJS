"use strict";

const getWeekDay = (date) => {
  const days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
  return days[date.getDay()];
};

console.log(getWeekDay(new Date(2012, 0, 3)));
