var longestPalindrome = function (s) {
  function expand(r, l) {
    while (l >= 0 && r < s.length && s[r] == s[l]) {
      l -= 1;
      r += 1;
    }
    //return string: l r are exluded
    return s.slice(l + 1, r);
  }
  let longest = "";
  for (let i = 0; i < s.length; i++) {
    let substring1 = expand(i, i);
    if (substring1.length > longest.length) {
      longest = substring1;
    }
    let substring2 = expand(i, i + 1);
    if (substring2.length > longest.length) {
      longest = substring2;
    }
  }
  return longest;
};

let string1 = "babad";
// console.log(string1.slice(0, 3));
console.log(longestPalindrome(string1));
