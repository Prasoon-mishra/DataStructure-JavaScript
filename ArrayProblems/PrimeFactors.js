//prime factors of a number is stored into an array
var prompt = require("prompt-sync")();
let number = parseInt(prompt("Enter a number: "));
var factorArray = new Array();
console.log(`The factors of ${number} is`);
while (number % 2 == 0) {
  //factorArray is store all the factors of a given number
  factorArray.push(2);
  number /= 2;
}
for (let i = 3; i * i <= number; i++) {
  while (number % i == 0) {
    factorArray.push(i);
    number /= i;
  }
}
if (number > 2) {
  factorArray.push(number);
}
console.log(factorArray);