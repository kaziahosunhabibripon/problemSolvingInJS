// sum of all numbers
function sum(params1, params2) {
  return params1 + params2;
}
const output = sum(1, 2);

console.log(output);
function totalSum(...param1) {
  let totalSum = 0;
  param1.forEach(element => {
    totalSum += element;
  });
  return totalSum;
}
const res = totalSum(1, 2, 5, 7, 8, 9);
console.log(res);
