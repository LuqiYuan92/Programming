/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  //recursive solution,find the middle of the array and create a node
  function createTree(left, right) {
    if (left > right) return null;
    let mid = Math.floor((left + right) / 2);
    let node = new TreeNode(nums[mid]);
    node.left = createTree(left, mid - 1);
    node.right = createTree(mid + 1, right);
    return node;
  }

  return createTree(0, nums.length - 1);
};
