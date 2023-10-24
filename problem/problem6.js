// * rows 4 columns 5

function pattern(rows, cols) {
  let start = "";
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      start += "*";
    }
    start += "\n";
  }
  return start;
}

console.log(pattern(4, 5));

function HollowPattern(rows, cols) {
  let start = "";
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      if (j == 1 || j == cols) {
        start += "*";
      } else if (i == 1 || i == rows) {
        start += "*";
      } else {
        start += " ";
      }
    }
    start += "\n";
  }
  return start;
}
console.log(HollowPattern(5, 4));
