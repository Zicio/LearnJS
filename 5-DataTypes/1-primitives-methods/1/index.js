"use strict";

let str = "Привет";

str.test = 5;

console.log(str.test);

// undefined (without strict mode)
// TypeError: Cannot create property 'test' on string 'Привет' (strict mode)
