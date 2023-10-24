// [1,5,9,35,40,50,60,100,107,110,3]
let arr = [1, 5, 9, 35, 40, 50, 60, 100, 107, 110, 3];
function largestNumber(arr) {
  let largestNumber = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }
  return largestNumber;
}

console.log(largestNumber(arr)); // 110
