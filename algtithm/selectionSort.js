function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j; //find the index of minimum elements
      }
    }
    ///Swap the found minimum element with the first element
    temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }

  return array;
}

const numbers = [99, 2, 64, 45, 23];
console.log("original", numbers);
let sorted = selectionSort(numbers);
console.log("sorted", sorted);
