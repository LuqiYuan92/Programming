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

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
//DFS  recursive solution
var maxDepth = function (root) {
  if (root == null) return 0;
  let depthLeft = maxDepth(root.left);
  let depthRight = maxDepth(root.right);

  return 1 + Math.max(depthLeft, depthRight);
};

// BFS iterative solution  using queue
var maxDepth1 = function (root) {
  //Edge Case Handling: Added a check for an empty tree (if (!root) return 0).
  if (!root) return 0;
  let deque = [root];
  let depth = 0;

  //While Loop: Ensures that we continue processing until there are no more nodes left to process (i.e., we've traversed all levels of the tree).
  while (deque.length > 0) {
    //iterate through each level
    let levelSize = deque.length;
    //For Loop: Ensures that we process all nodes at the current level before moving on to the next level.
    for (let i = 0; i < levelSize; i++) {
      //remove the first element from the queue, the length of array will change
      let node = deque.shift();
      //add left and right child to the queue, the length of array will change
      if (node.left) deque.push(node.left);
      if (node.right) deque.push(node.right);
    }
    //increment depth after each level
    depth++;
  }
  return depth;
};
