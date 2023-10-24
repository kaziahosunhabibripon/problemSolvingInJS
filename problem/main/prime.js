//  7,11,13,17,19,23
function primeNumber(number) {
  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(primeNumber(21)); // false
