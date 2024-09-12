/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare1 = function (s, t) {
  function buildString(str) {
    let stack = [];
    for (let st of str) {
      if (st === "#" && stack.length > 0) {
        stack.pop();
      } else if (st !== "#") {
        stack.push(st);
      }
    }
    return stack.join("");
  }
  return buildString(s) === buildString(t);
};

//use two pointers to iterate through the strings
//correctly account for multiple consecutive # characters
//count the number of # characters to skip
//If a # is found, the skip counter is incremented.
//For each character encountered when # is larger than zero, the counter is decremented until it reaches 0.
//one string is less than 0, but other string within bounds
var backspaceCompare = function (s, t) {
  //return index of the next valid character to compare
  function skipBackspace(str, index) {
    let skipCount = 0;
    while (index >= 0) {
      if (str[index] === "#") {
        skipCount++;
        index--;
      } else if (str[index] !== "#" && skipCount > 0) {
        skipCount--;
        index--;
      } else if (str[index] !== "#" && skipCount === 0) {
        break;
      }
    }
    return index;
  }

  //iterate through the strings
  let sIndex = s.length - 1;
  let tIndex = t.length - 1;

  while (sIndex >= 0 || tIndex >= 0) {
    sIndex = skipBackspace(s, sIndex);
    tIndex = skipBackspace(t, tIndex);
    //if both strings are within bounds, compare the characters at the current index
    //use conditional operator to handle the case where one string is out of bounds
    let sChar = s[sIndex] ? s[sIndex] : "";
    let tChar = t[tIndex] ? t[tIndex] : "";
    if (sChar !== tChar) {
      return false;
    }
    sIndex--;
    tIndex--;
  }
  return true;
};

var backspaceCompare2 = function (s, t) {
  let sp = s.length - 1;
  let tp = t.length - 1;
  let skipS = 0;
  let skipT = 0;

  while (sp >= 0 || tp >= 0) {
    while (sp >= 0) {
      if (s[sp] === "#") {
        skipS++;
        sp--;
      } else if (s[sp] !== "#" && skipS > 0) {
        skipS--;
        sp--;
      } else if (s[sp] !== "#" && skipS === 0) {
        //break out of the loop if the character is not a # and the skip counter is 0
        break;
      }
    }

    while (tp >= 0) {
      if (t[tp] === "#") {
        skipT++;
        tp--;
      } else if (t[tp] !== "#" && skipT > 0) {
        skipT--;
        tp--;
      } else if (t[tp] !== "#" && skipT === 0) {
        break;
      }
    }

    // Compare characters after skipping
    if (tp >= 0 && sp >= 0 && s[sp] !== t[tp]) {
      return false;
    }
    //if one string is less than 0, but other string within bounds
    if (tp >= 0 !== sp >= 0) {
      return false;
    }
    //move to the next character if current characters are equal
    sp--;
    tp--;
  }
  //both strings are out of bounds return true
  // if (tp < 0 && sp < 0)
  return true;
};
