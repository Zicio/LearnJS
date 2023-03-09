"use strict";

const loadJson = async (url) => {
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      return response.json();
    }
    throw new Error(`${response.status}`);
  } catch (err) {
    return err.message;
  }
};

console.log(loadJson("no-such-user.json"));
