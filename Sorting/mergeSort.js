function mergeSort(array) {
  if (array.length < 2) {
    // console.log("one element", array);
    return array;
  }

  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);
  //slice return a new array object selected from start to end (end not included)
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  console.log("sortedLeft", sortedLeft);
  console.log("sortedRight", sortedRight);
  //   console.log("mergedcheck", merge(left, right));  incorrect
  return merge(sortedLeft, sortedRight);
  //alternative approach
  return merge(mergeSort(left), mergeSort(right)); //merge the divided one last element (divide and conquer)
}

//time complexity= O(nlogn)
function merge(left, right) {
  let sortedArray = []; //space complexity = O(n)
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      sortedArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      sortedArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  //   push the remaining elements
  while (leftIndex < left.length) {
    sortedArray.push(left[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < right.length) {
    sortedArray.push(right[rightIndex]);
    rightIndex++;
  }

  return sortedArray;

  //alternative approach to push the remaining elements

  results = sortedArray.concat(
    left.slice(leftIndex).concat(right.slice(rightIndex))
  );

  //either left.slice(leftIndex) or right.slice(rightIndex) is empty array
  return results;
  //concat does not change the existing arrays, but instead returns a new array.
}

// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const numbers = [99, 2, 64, 45, 23];
console.log("original", numbers);
let sorted = mergeSort(numbers);
console.log("sorted", sorted);
