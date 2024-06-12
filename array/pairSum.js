function hasPairWithSum1(arr, sum) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        console.log(`${arr[i]}+${arr[j]}=${sum}`, i, j);
        return true;
      }
    }
  }
  return false;
}

//time o(i*j)
//space o(1)

function hasPairWithSum2(arr, sum) {
  const mySet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      console.log("yes");
      console.log(mySet, arr[i]);
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
}

// time O(i)
// space O(a)

array = [6, 4, 6, 2, 3, 2, 1, 7];
console.log(hasPairWithSum1(array, 9));

console.log(hasPairWithSum2(array, 9));

// The has method checks if a value is in the set, using an approach that is, on average, quicker than testing most of the elements that have previously been added to the set. In particular, it is, on average, faster than the Array.prototype.includes method when an array has a length equal to a set's size

const mySet1 = new Set();

mySet1.add(1); // Set(1) { 1 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add("some text"); // Set(3) { 1, 5, 'some text' }
const o = { a: 1, b: 2 };
mySet1.add(o);

mySet1.add({ a: 1, b: 2 }); // o is referencing a different object, so this is okay

console.log(mySet1);

console.log(mySet1.has(o));

for (const item of mySet1.keys()) {
  console.log(item);
}
// 1, 5, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }

for (const item of mySet1.values()) {
  console.log(item);
}

for (const [key, value] of mySet1.entries()) {
  console.log("key", key);
  console.log("value", value);
}
