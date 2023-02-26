"use strict";

const getSecondsToday = () => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return (now - today) / 1000;
};

console.log(getSecondsToday());
