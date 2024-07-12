// splice ()  If only one element is removed, an array of one element is returned. If no elements are removed, an empty array is returned.

function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[0]) {
      array.unshift(array.splice(i, 1)[0]);
    } else {
      for (let j = 1; j < i; j++)
        if (array[j - 1] < array[i] && array[i] < array[j]) {
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
    }
  }
  return array;
}

//The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 88];

let sorted = insertionSort(numbers);
console.log(sorted);
