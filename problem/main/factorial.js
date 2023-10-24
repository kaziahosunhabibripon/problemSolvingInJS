// !5 = !4*!3*!2*!1

function factorial(number) {
  if (number === 0) {
    return 1;
  }
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  return factorial;
}

console.log(factorial(5)); // 120
