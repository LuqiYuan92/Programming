function mergeSortedArrays(array1, array2) {
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  j = 1;

  //if array1Item is undefined ; undefined<array2Item  is false ; the array2Item would be pushed in the array
  //if array2Item is undefined; array1Item < undefined is false ;mergedArray.push(array2Item) cause error
  while (array1Item || array2Item) {
    console.log(array1Item, array2Item);
    if ((array2Item === undefined) | (array1Item < array2Item)) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  return mergedArray;
}

array1 = [0, 3, 4, 31];
array2 = [3, 4, 6, 30];
console.log(mergeSortedArrays(array1, array2));

// console.log(mergeSortedArrays([0, 2], [3]));
