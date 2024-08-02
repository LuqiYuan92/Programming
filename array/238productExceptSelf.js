var productExceptSelf = function (nums) {
  let products = new Array(nums.length);
  products.fill(1);
  for (let i = 1; i < nums.length; i++) {
    products[i] = products[i - 1] * nums[i - 1];
  }
  let right = nums[nums.length - 1];
  for (let i = nums.length - 2; i >= 0; i--) {
    products[i] *= right;
    right *= nums[i];
  }
  return products;
};

let nums = [1, 2, 3, 4];

console.log(productExceptSelf);
