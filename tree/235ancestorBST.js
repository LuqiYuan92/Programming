/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let current = root;

  // If both p and q are less than current node, LCA must be in the left subtree

  while (current) {
    if (current.val > p.val && current.val > q.val) {
      current = current.left;
      //// If both p and q are greater than current node, LCA must be in the right subtree
    } else if (current.val < p.val && current.val < q.val) {
      current = current.right;
    } else {
      //If current node is between p and q, or equal to one of them, it is the LCA
      return current;
    }
  }

  return null;
};
