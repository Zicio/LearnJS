"use strict";

const checkSpam = (str) => {
  const lowerCaseStr = str.toLowerCase();
  return lowerCaseStr.includes("viagra") || lowerCaseStr.includes("xxx");
};

console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));
