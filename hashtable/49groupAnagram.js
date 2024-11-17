/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  group = {};
  for (let word of strs) {
    let key = [...word].sort().join("");
    if (key in group) {
      group[key].push(word);
    } else {
      group[key] = [word];
    }
  }
  return Object.values(group);
};

// Convert the string into an array using split() method.
// Sort the array using the sort() method
// Convert the sorted array back to String using join() method.

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

array1 = strs[0].split("");
array2 = [...strs[0]];

console.log(array1.sort());
console.log(array2.sort((a, b) => a.localeCompare(b)));

// Destructure the string into an array using the spread operator
// Sort the array by passing a callback function inside sort() method
// Use the inbuilt localeCompare() and join() methods to return the sorted String
