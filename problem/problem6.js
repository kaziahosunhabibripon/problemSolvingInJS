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
      if (i == 1 || i == rows) {
        start += "*";
      } else if (j == 1 || j == cols) {
        start += "*";
      } else {
        start += " ";
      }
    }
    start += "\n";
  }
  return start;
}
console.log(HollowPattern(6, 5));

function invertedPattern(rows) {
  let start = "";
  for (let i = rows; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      start += "*";
    }
    start += "\n";
  }

  return start;
}
console.log(invertedPattern(5));

function normalPattern(rows) {
  let result = "";
  for (let i = 1; i <= rows; i++) {
    let start = "";
    for (let j = 1; j <= i; j++) {
      start += "*";
    }
    result += start + "\n";
  }
  return result;
}
console.log(normalPattern(5));

function pyramidPattern(rows) {
  let result = "";
  for (let i = 1; i <= rows; i++) {
    let spaces = " ".repeat(rows - i);
    let stars = "*".repeat(2 * i - 1);
    result += spaces + stars + spaces + "\n";
  }
  return result;
}
console.log(pyramidPattern(9));
