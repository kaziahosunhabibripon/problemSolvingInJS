// [123456123456] [123456]

// function removeDuplicates(arr) {
//   const uniqueArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (uniqueArr.indexOf(arr[i]) === -1) {
//       uniqueArr.push(arr[i]);
//     }
//   }
//   return uniqueArr;
// }

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

function removeDuplicates(arr) {
  return arr.filter(function (item, index) {
    return arr.indexOf(item) === index;
  });
}
console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4])); // [1, 2, 3, 4]
