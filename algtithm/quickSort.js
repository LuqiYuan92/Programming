function quickSort(array, start, end) {
  if (start < end) {
    let partitionIndex = partition(array, start, end);
    quickSort(array, start, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, end);
  }

  return array;
}

//  index of 'end and start' depends on partitionIndex

function partition(array, start, end) {
  let pivot = array[end];
  let partitionIndex = start;

  for (let i = start; i < end; i++) {
    if (array[i] < pivot) {
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }

  swap(array, partitionIndex, end);

  return partitionIndex;
}

function swap(array, indexOne, indexTwo) {
  let temp = array[indexOne];
  array[indexOne] = array[indexTwo];
  array[indexTwo] = temp;
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log("original", numbers);
let sorted = quickSort(numbers, 0, numbers.length - 1);
console.log("sorted", sorted);
