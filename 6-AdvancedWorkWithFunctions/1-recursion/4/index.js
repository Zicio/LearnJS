"use strict";

/*const printList = (n) => {
  let next = n;
  while (next) {
    console.log(next.value);
    next = next.next;
  }
};*/

/*const printList = (n) => {
  console.log(n.value); //
  if (n.next) {
    printList(n.next);
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
