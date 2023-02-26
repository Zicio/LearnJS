"use strict";

const formatDate = (date) => {
  const now = new Date();
  const pastTense = Math.round((now - date) / 1000);
  if (pastTense < 1) {
    console.log("прямо сейчас");
    return;
  }
  if (pastTense < 60) {
    console.log(`${pastTense} сек. назад`);
    return;
  }
  if (pastTense < 3600) {
    console.log(`${pastTense / 60} мин. назад`);
    return;
  }
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  console.log(date.toLocaleDateString("ru-RU", options));
};

formatDate(new Date(new Date() - 1));
formatDate(new Date(new Date() - 30 * 1000));
formatDate(new Date(new Date() - 5 * 60 * 1000));
formatDate(new Date(new Date() - 86400 * 1000));
