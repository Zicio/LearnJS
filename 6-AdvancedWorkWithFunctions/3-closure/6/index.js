"use strict";

const makeArmy = () => {
  let shooters = [];
  for (let i = 0; i < 10; i++) {
    let shooter = () => {
      console.log(i);
    };
    shooters.push(shooter);
  }
  return shooters;
};

let army = makeArmy();

army[0]();
army[5]();
