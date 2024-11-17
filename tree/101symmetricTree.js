// *
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true;
  //function parameter is left and right
  function isMirror(left, right) {
    //base case if both left and right are null, return true; if one of them is null, return false
    if (!left && !right) return true;
    if (!left || !right) return false;

    //if the value of left and right are equal, recursively check the left.left and right.right and left.right and righ
    return (
      left.val === right.val &&
      isMirror(left.left, right.right) &&
      isMirror(left.right, right.left)
    );
  }
  return isMirror(root.left, root.right);
};

//iterative solution

var isSymmetric = function (root) {
  if (!root) return true;
  let queue = [root.left, root.right];
  //BFS using queue or stack
  //while the queue is not empty, check the left and right of the queue
  while (queue.length > 0) {
    let left = queue.shift();
    let right = queue.shift();

    //if both left and right are null, continue to the next iteration
    if (!left && !right) continue;
    if (!left || !right) return false;
    if (left.val !== right.val) return false;
    queue.push(left.left);
    queue.push(right.right);
    queue.push(left.right);
    queue.push(right.left);
  }

  return true;
};
