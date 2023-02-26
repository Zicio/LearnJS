"use strict";

const topSalary = (salaries) => {
  let topSalary = { name: null, salary: null };
  for (const [name, salary] of Object.entries(salaries)) {
    if (salary > topSalary.salary) {
      topSalary.name = name;
      topSalary.salary = salary;
    }
  }
  return topSalary.name;
};

console.log(
  topSalary({
    John: 100,
    Pete: 300,
    Mary: 250,
  })
);
