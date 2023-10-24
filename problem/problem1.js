// for inputArray = [1,2,1], elementToReplace = 1 and subtractionEle = 3,
// output should be arrayReplace(inputArray, elementToReplace, subtractionEle) = [3,2,3]
let inputArray = [1, 2, 1];
let elementToReplace = 1;
let subtractionEle = 3;
function arrayReplace(inputArray, elementToReplace, subtractionEle) {
  inputArray.forEach((element, index) => {
    if (element === elementToReplace) {
      inputArray[index] = subtractionEle;
    }
    console.log(inputArray);
  });
}
arrayReplace(inputArray, elementToReplace, subtractionEle);
