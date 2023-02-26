"use strict";

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

const readMessages = new WeakSet();

readMessages.add(messages[0]);

console.log(readMessages.has(messages[0]));
