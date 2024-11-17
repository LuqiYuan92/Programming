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
 * @return {boolean}
 */
var isBalanced = function (root) {
  function height(node) {
    if (!node) {
      return [true, 0];
    }
    // Recursively get the height and balance status of the left and right subtrees
    let hLeft = height(node.left);
    //If the left subtree is not balanced, no need to check the right subtree
    if (!hLeft[0]) return [false, 0];
    let hRight = height(node.right);
    //If the right subtree is not balanced, no need to check the left subtree
    if (!hRight[0]) return [false, 0];
    let dif = Math.abs(hLeft[1] - hRight[1]);
    let balanced = dif <= 1 && hLeft[0] && hRight[0];
    let currentHeight = 1 + Math.max(hLeft[1], hRight[1]);
    return [balanced, currentHeight];
  }

  return height(root)[0];
};
