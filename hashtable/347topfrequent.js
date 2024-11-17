/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  //1:count the frequency of each element in hash table
  let freq = {};
  for (let num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }
  //2sort the elements based on their frequency in descending order
  //map(Number) change the string keys array to numbers array
  let sorted = Object.keys(freq)
    .map(Number)
    .sort((a, b) => freq[b] - freq[a]);
  //return the first k elements
  return sorted.slice(0, k);
};

var topKFrequent2 = function (nums, k) {
  let freq = {};
  for (let num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }

  //2create a bucket array to store the elements with the same frequency
  //the index of the bucket array is the frequency of the elements, and the value is an array of elements with that frequency
  //The +1 is often added to account for cases where the frequency of an element might equal the length of the input array
  let bucket = new Array(nums.length + 1).fill().map(() => []);
  for (let num in freq) {
    bucket[freq[num]].push(num);
  }

  //start from the end of the bucket array, which is the highest frequency
  let res = [];
  for (let i = bucket.length - 1; i >= 0 && res.length < k; i--) {
    res.push(...bucket[i]);
  }
  //result array size is larger or equal to k, return the first k elements
  return res.slice(0, k);
};
