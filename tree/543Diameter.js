/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let result = 0;
  function dfs(root) {
    if (!root) {
      return 0;
    }
    let heightLeft = dfs(root.left);
    let heightRight = dfs(root.right);
    //the height of the current node is the max of the left and right subtree + 1
    let maxHeight = Math.max(heightLeft, heightRight) + 1;
    //the diameter of the current node is the sum of the left and right subtree
    let diameter = heightLeft + heightRight;
    result = Math.max(diameter, result);
    return maxHeight;
  }

  dfs(root);
  return result;
};
