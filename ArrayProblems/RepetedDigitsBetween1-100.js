//program to find the elements repeated digit using palindrome and print the array
var start = 1;
var end = 100;
var repArr = new Array();
for (let i = start; i < end; i++) {
  if (i > 10) {
    result = checkPalindrome(i.toString());
    if (result == true) {
      repArr.push(i);
    }
  }
}
console.log("The result [ " + repArr + " ]");
function checkPalindrome(number) {
  var res1 = number.split("").reverse().join("");
  if (res1 == number) {
    return true;
  } else {
    return false;
  }
}