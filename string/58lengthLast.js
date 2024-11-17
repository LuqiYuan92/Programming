/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  //remove the heading an trailing space using trim
  //The \s in the regular expression matches any whitespace character (spaces, tabs, line breaks), and the + means "one or more"
  s_nospace = s.trim().split(/\s+/);
  lastWord = s_nospace[s_nospace.length - 1];
  return lastWord.length;
};

let s = "   fly me   to   the moon  ";
console.log(lengthOfLastWord(s));

var lengthOfLastWord = function (s) {
  let count = 0;
  let i = s.length - 1;
  while (i >= 0 && s[i] === " ") {
    i--;
  }
  while (i >= 0 && s[i] !== " ") {
    count++;
    i--;
  }
  return count;
};
