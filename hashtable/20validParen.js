var isValid = function (s) {
  let stack = [];
  let paired = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let bracket of s) {
    if (bracket in paired) {
      //if (paired[bracket]!==undefined) obj.key1===value1
      stack.push(bracket);
    }
    //if not stored as a key;
    //the input should be a closed bracket;check whether is a pair
    else {
      //stack.length === 0 means there is a closd bracket but no opennig bracket in string
      if ((stack.length === 0) | (bracket !== paired[stack.pop()])) {
        return false;
      }
    }
  }
  //   return stack.length === 0;
  if (stack.length === 0) return true;
  else return false;
};
