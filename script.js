// Calculate how much luxury tax a team will pay for 3 players

// Set up the variables for the calculation

console.log(`====== EDX Challenge =====`);

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

console.log(`********************************`);
console.log(`*********** next little challenge ***********`);

// Calculate average score for each team using this data:

// TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.

// using const as I don't need the variable to change:

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (96 + 108 + 89) / 3;

console.log(`Here are the average scores for each team.`);
console.log(`Dolpins ${scoreDolphins} and Koalas${scoreKoalas}`);

// Who is the winner of the contest - whoever has the highest average score wins

if (scoreDolphins > scoreKoalas) {
  console.log(
    `The Dolphins win because ${scoreDolphins} is greater than ${scoreKoalas} 😀`
  );
} else if (scoreKoalas > scoreDolphins) {
  console.log(`The Koalas win because their score is higher 😀 `);
} else if (scoreDolphins === scoreKoalas) {
  console.log(`Draw - we don't have a winner`);
}
