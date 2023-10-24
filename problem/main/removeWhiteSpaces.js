//  "name , age"

function removeWhitespace(string) {
  return string.replace(/\s/g, "");
}

console.log(removeWhitespace(" name,   age ")); // name,age
