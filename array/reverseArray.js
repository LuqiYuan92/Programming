function reverse(str) {
  if (!str || str.length < 2 || typeof str != "string") {
    return str;
  }

  const backwards = [];
  for (let i = str.length - 1; i >= 0; i--) {
    backwards.push(str[i]);
  }

  const newString = backwards.join("");
  console.log(backwards);
  //   console.log(newString);
  return newString;
}

let mystr = "hi my name is lucy";
// console.log(reverse(mystr));
// console.log(mystr[0]);

function reverse2(str) {
  if (!str || str.length < 2 || typeof str != "string") {
    return str;
  }

  let reversedStr = str.split("").reverse().join("");
  return reversedStr;
}

// console.log(reverse2(mystr));
// console.log(mystr.split(" "));
// console.log(mystr.split(""));

//spread operator and arrow function
const reverse3 = (str) => {
  if (!str || str.length < 2 || typeof str != "string") {
    return str;
  }
  let strToArray = [...str];
  console.log(strToArray);
  let toreverse = strToArray.reverse();
  console.log(toreverse);
  let joined = toreverse.join("");

  joined = [...str].reverse().join("");

  return joined;
};

console.log([mystr]);

console.log(reverse3(mystr));
