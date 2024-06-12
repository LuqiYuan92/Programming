// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "v", "a", "b"];
const array3 = ["a", "b", "c", "z"];

function containCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (array1[i] === array2[j]) {
        console.log("yes1");
        return true;
      }
    }
  }
  console.log("no1");
  return false;
}

//time complexity O(a*b)
//space  O(1)

//loop through first array and create object where properties === items in the array
// can we assume always 2 params?
function containCommonItem2(arr1, arr2) {
  let map = {};
  function convertArrToObject(arr1) {
    for (let i = 0; i < arr1.length; i++) {
      if (!map[arr1[i]]) {
        let item = arr1[i];
        map[item] = true;
      }
    }
  }
  convertArrToObject(array1);
  console.log(map);

  // loop through second array and check if item in second array exists on created object.
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      console.log("yes2");
      return true;
    }
  }
  console.log("no2");
  return false;
}
//time complexity O(a+b)
//space  O(a)   new object created

//The some() method is an iterative method. It calls a provided callbackFn function once for each element in an array,
//until the callbackFn returns a truthy value. If such an element is found, some() immediately returns true and stops iterating through the array.

function containCommonItem3(arr1, arr2) {
  arr1.some((item) => {
    if (arr2.includes(item)) {
      console.log("include");
      return true;
    } else {
      console.log("not include");
      return false;
    }
  });
}

//time complexity O(a*b)
//space  O(1)

// containCommonItem(array1, array2);
// containCommonItem2(array2, array3);
// containCommonItem2(array1, array2);

console.log(containCommonItem3(array2, array3));
// containCommonItem3(array1, array2);
