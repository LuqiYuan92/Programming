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
  if (!root) return null;
  if (root === q || root === p) return root;

  let l = lowestCommonAncestor(root.left, p, q);
  let r = lowestCommonAncestor(root.right, p, q);

  if (l && r) return root;
  else return l || r;
  //   else if (l) return l;
  //   else if (r) return r;
  //   else return null;

  //if p is the ancestor of q, will only check for p ,return will be p and null
  //if q is the ancestor of p, will only check for q, return will be q and null
  //recursive call return to the parent node, if both left and right are not null, then parent is the LCA
};
