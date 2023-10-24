// palindrome 121 NAN racecar

function palindrome(str) {
  const reverseString = str.split("").reverse().join("");

  return str === reverseString;
}
console.log(palindrome("racecar")); // true
