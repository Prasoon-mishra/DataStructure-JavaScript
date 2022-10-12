//P1 : Min max in an array without sorting
console.log("***Min max without sorting***");
var prompt = require("prompt-sync")();
var number = parseInt(prompt("Enter number of elements : "));
var numArr = new Array();
for (let i = 0; i < number; i++) {
  var random = Math.floor(Math.random() * (999 - 100)) + 100;
  numArr.push(random);
}
console.log("The array is :");
console.log(numArr);
var second = numArr[0];
function FindMin(temp, min) {
  return Math.min(temp, min);
}
//using helper function to find min
var min = numArr.reduce(FindMin, numArr[0]);
//finds the second smallest element
for (i = 0; i < number; i++) {
  if (numArr[i] < second && numArr[i] != min) {
    second = numArr[i];
  }
}
console.log("The second minimum element in array is : " + second);
function FindMax(temp, max) {
  return Math.max(temp, max);
}
//using helper function to find max;
var max = numArr.reduce(FindMax, 0);
//find the second maximun element
for (i = 0; i < number; i++) {
  if (numArr[i] > second && numArr[i] < max) {
    second = numArr[i];
  }
}
console.log("The second maximum element in array is : " + second);
//P2: refactor the above code to find min max after sorting
console.log("***Min max with sorting***");
{
  var number = parseInt(prompt("Enter number of elements : "));
  var numArr = new Array();
  for (let i = 0; i < number; i++) {
    var random = Math.floor(Math.random() * (999 - 100)) + 100;
    numArr.push(random);
  }
  console.log("The array is :");
  console.log(numArr);
  numArr.sort();
  console.log("After Sorting : ");
  console.log(numArr);
  console.log("The second minimum element in array is : " + numArr[1]);
  console.log("The second maximum element in array is : " + numArr[number - 2]);
}