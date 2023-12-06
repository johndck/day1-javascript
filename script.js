// Calculate how much luxury tax a team will pay for 3 players

// Set up the variables for the calculation

let playerSalaryA;
let playerSalaryB;
let playerSalaryC;
let spendingLimit;
let taxRate;

// Assign the values to the variables for this example

playerSalaryA = 20000000;
playerSalaryB = 20000000;
playerSalaryC = 15000000;
spendingLimit = 40000000;
taxRate = 0.18;

// Calculation:

// Determine the total salary bill:

let totalSalary = playerSalaryA + playerSalaryB + playerSalaryC;

console.log(`The Total Salary Bill is £${totalSalary}`);

// Determine if there is any tax to pay if the total salary bill is over the spending limit.

if (totalSalary <= spendingLimit) {
  console.log(
    `Total salary bill is £${totalSalary} and there is no luxury tax to pay`
  );
} else {
  let taxableAmount = totalSalary - spendingLimit;
  let taxTopay = taxableAmount * taxRate;
  console.log(
    `With a total salary bill of £${totalSalary} you have to pay luxury tax of £${taxTopay} because you have exceeded the wage limit of £${spendingLimit}. The luxury tax bill of £${taxTopay} is ${
      taxRate * 100
    }% of £${taxableAmount}.`
  );
}
