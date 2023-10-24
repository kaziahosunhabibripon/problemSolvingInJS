// give a sequence of integer to an array, determine whether it is possible to obtain
// a strictly increasing sequence by removing not more than one element from the array
// inp = [1, 3,2, 1] output = false

function sequence(inpArr) {
  for (let i = 1; i < inpArr.length; i++) {
    if (inpArr[i] < inpArr[i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(sequence([1, 2, 3]));
