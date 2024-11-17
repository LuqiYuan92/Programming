/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let map = {};
  // use dictionary:character as key, frequency of character as value
  for (let s of magazine) {
    if (map[s]) {
      map[s] += 1;
    } else {
      map[s] = 1;
    }
  }

  for (let s of ransomNote) {
    if (!map[s]) {
      return false;
    } else if (map[s] === 1) {
      delete map[s];
    } else {
      map[s] -= 1;
    }
  }
  return true;
};

var canConstruct1 = function (ransomNote, magazine) {
  let map = {};
  // use dictionary:character as key, frequency of character as value
  for (let s of magazine) {
    if (map[s]) {
      map[s] += 1;
    } else {
      map[s] = 1;
    }
  }

  for (let s of ransomNote) {
    if (!map[s] || map[s] === 0) {
      return false;
    } else {
      map[s] -= 1;
    }
  }
  return true;
};

//the code compares the characters at each index directly, which is incorrect because it doesn’t account for extra characters in magazine.
var canConstruct2 = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) {
    return false;
  }
  let r = ransomNote.split("").toSorted();
  let m = magazine.split("").toSorted();
  console.log(r, m);

  for (let i = 0; i < r.length; i++) {
    if (r[i] !== m[i]) {
      return false;
    }
  }
  return true;
};
a = "bg";
b = "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj";

console.log(canConstruct2(a, b));
