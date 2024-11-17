function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
}

function firstRecurringCharacter2(input) {
  const map = {};
  for (let i = 0; i < input.length; i++) {
    console.log("value", map[input[i]]);
    if (map[input[i]]) {
      return input[i];
    }
    map[input[i]] = true;
    console.log("object", map);
  }

  return undefined;
}

//if the repeated charater appears at index=0, the answer would be wrong
function firstRecurringCharacter3(input) {
  const map = {};
  for (let i = 0; i < input.length; i++) {
    console.log("value", map[input[i]]);
    // if(0) === if(false)
    if (map[input[i]]) {
      return input[i];
    }
    map[input[i]] = i;
    console.log("object", map);
  }

  return undefined;
}

//correct version of firstRecurringCharacter4
function firstRecurringCharacter4(input) {
  const map = {};
  for (let i = 0; i < input.length; i++) {
    console.log("value", map[input[i]]);
    // if(0) === if(false)
    if (map[input[i]] !== undefined) {
      return input[i];
    }
    map[input[i]] = i;
    console.log("object", map);
  }

  return undefined;
}
array1 = [1, 5, 1, 5, 3, 4, 6];
array2 = [2, 5, 5, 2, 3, 5, 1, 2, 4];

console.log(firstRecurringCharacter2(array1));
console.log(firstRecurringCharacter3(array1));
console.log(firstRecurringCharacter4(array1));

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
