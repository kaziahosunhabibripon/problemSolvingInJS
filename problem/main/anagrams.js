// "listen" "silent"

function isAnagrams(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(isAnagrams("listen", "silent")); // true
