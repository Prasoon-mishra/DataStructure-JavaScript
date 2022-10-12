//program to find triplets that adds to zero
var prompt = require("prompt-sync")();
var number = parseInt(prompt("Enter number of elements : "));
//function to create a array
function createArr(number) {
  var TripletArr = new Array();
  for (let i = 0; i < number; i++) {
    temp = parseInt(prompt(`Enter ${i} elements : `));
    TripletArr.push(temp);
  }
  return TripletArr;
}
//function to find the triplets
function findTriplet(number) {
  TripletArr = createArr(number);
  console.log("The array is :");
  console.log(TripletArr);
  let found = 0;
  for (let i = 0; i < TripletArr.length - 2; i++) {
    for (let j = i + 1; j < TripletArr.length - 1; j++) {
      for (let k = j + 1; k < TripletArr.length; k++) {
        if (TripletArr[i] + TripletArr[j] + TripletArr[k] == 0) {
          console.log(
            `The triplets are ${TripletArr[i]} ${TripletArr[j]} ${TripletArr[k]}`
          );
          found = 1;
        }
      }
    }
  }
  if (found == 0) {
    console.log("No triplets Found");
  }
}
findTriplet(number);