"use strict";

/*const printList = (n) => {
  if (n.next) {
    printList(n.next);
  }
  console.log(n.value);
};*/

/*const printList = (n) => {
  let result = [];
  let next = n;
  while (next) {
    result.push(next.value);
    next = next.next;
  }
  for (let i = result.length; i >= 0; i--) {
    console.log(result[i]);
  }
};*/

const list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

printList(list);
