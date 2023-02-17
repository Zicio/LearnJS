"use strict";

if (-1 || 0) alert("first"); // first
if (-1 && 0) alert("second"); // не выполнится
if (null || (-1 && 1)) alert("third"); // third
