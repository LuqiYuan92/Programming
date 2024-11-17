const numbers = [3, 1, 4, 1, 5];
// [...numbers] creates a shallow copy, so sort() does not mutate the original
const sorted = [...numbers].sort((a, b) => a - b);
// console.log("before", sorted);
sorted[0] = 10;
// console.log(numbers); // 3
// console.log("after", sorted); // 3

//leetcode 4
var findMedianSortedArrays1 = function (nums1, nums2) {
  let nums = [...nums1, ...nums2].sort((a, b) => a - b);
  let midIndex = Math.floor(nums.length / 2);
  if (nums.length % 2 === 0) {
    mid = (nums[midIndex - 1] + nums[midIndex]) / 2;
  } else {
    mid = nums[midIndex];
  }

  return mid;
};

//time comlex O(log (min(m,n)))
var findMedianSortedArrays2 = function (nums1, nums2) {
  //Ensure nums1 is the smaller array to minimize the binary search range.
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }
  let imin = 0,
    imax = nums1.length - 1;
  let half = Math.floor((nums1.length + nums2.length) / 2);
  console.log("half", half);
  let med, partitionA, partitionB, Aleft, Bleft, Aright, Bright;

  while (true) {
    console.log("imin origin", imin, imax);
    partitionA = Math.floor((imin + imax) / 2); //index of partioning
    partitionB = half - partitionA - 2; //index from 0
    console.log("partition", partitionA, partitionB);
    if (partitionA >= 0) {
      Aleft = nums1[partitionA];
    } else {
      Aleft = Number.NEGATIVE_INFINITY;
    }

    if (partitionA >= nums1.length - 1) {
      Aright = Number.POSITIVE_INFINITY;
    } else {
      Aright = nums1[partitionA + 1];
    }

    console.log("num1left", Aleft, "right", Aright);

    if (partitionB >= 0) {
      Bleft = nums2[partitionB];
    } else {
      Bleft = Number.NEGATIVE_INFINITY;
    }

    if (partitionB >= nums2.length - 1) {
      Bright = Number.POSITIVE_INFINITY;
    } else {
      Bright = nums2[partitionB + 1];
    }

    console.log("num2", Bleft, "right", Bright);

    if (Aleft > Bright) {
      imax = partitionA - 1;
      console.log("imax", imax);
    } else if (Aright < Bleft) {
      imin = partitionA + 1;
      console.log("imin", imin);
    } else if (Aleft <= Bright && Aright >= Bleft) {
      //partition is correct
      if ((nums1.length + nums2.length) % 2 === 0) {
        med = (Math.max(Bleft, Aleft) + Math.min(Aright, Bright)) / 2;
      } else {
        med = Math.min(Aright, Bright);
      }
      return med;
    }
  }
};

let nums1 = [1, 3],
  nums2 = [2];

console.log("linear", findMedianSortedArrays1(nums1, nums2));
console.log("binary", findMedianSortedArrays2(nums1, nums2));

var findMedianSortedArrays = function (nums1, nums2) {
  //Ensure nums1 is the smaller array to minimize the binary search range.
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }
  let imin = 0,
    imax = nums1.length; //so partition index can include last element in array
  let half = Math.floor((nums1.length + nums2.length + 1) / 2);
  // For an odd total length, the left partition gets the extra element.
  // For an even total length, both partitions are of equal size.

  let med, partitionA, partitionB, Aleft, Bleft, Aright, Bright;

  while (imin <= imax) {
    partitionA = Math.floor((imin + imax) / 2); //index of partioning
    partitionB = half - partitionA;

    //Edge cases for num1
    let Aleft =
      partitionA === 0 ? Number.NEGATIVE_INFINITY : nums1[partitionA - 1];
    let Aright =
      partitionA === nums1.length
        ? Number.POSITIVE_INFINITY
        : nums1[partitionA];

    // Edge cases for num2
    let Bleft =
      partitionB === 0 ? Number.NEGATIVE_INFINITY : nums2[partitionB - 1];
    let Bright =
      partitionB === nums2.length
        ? Number.POSITIVE_INFINITY
        : nums2[partitionB];

    // if partition is incorrect
    if (Aleft > Bright) {
      imax = partitionA - 1; //using binary search move the border;discard the bigger number
    } else if (Aright < Bleft) {
      imin = partitionA + 1; //using binary search move the border;discard the smaller number
    } else if (Aleft <= Bright && Aright >= Bleft) {
      //partition is correct
      if ((nums1.length + nums2.length) % 2 === 0) {
        med = (Math.max(Bleft, Aleft) + Math.min(Aright, Bright)) / 2;
      } else {
        med = Math.max(Aleft, Bleft);
      }
      return med;
    }
  }
};
