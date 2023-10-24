// longestWord("The quick brown fox jumped over the lazy dog"); // "jumped"
function longestWord(str) {
  const words = str.split(" ");
  let longest = "";
  for (word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}
console.log(longestWord("The quick browns fox jumped over the lazy dog")); // "jumped"
