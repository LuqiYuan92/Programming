class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        //insert to the left
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;

            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (value > currentNode.value) {
            if (!currentNode.right) {
              currentNode.right = newNode;

              return this;
            }
            currentNode = currentNode.right;
          }
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return null;
  }

  findMin(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.findMin(root.left);
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
    // console.log("root", this.root);
  }

  deleteNode(root, value) {
    if (root === null) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
      //assign root the value that should be deleted
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      //case 1: no child
      if (!root.left && !root.right) {
        root = null;
        // return root;
      }

      //case 2:if only have one child
      else if (!root.left) {
        root = root.right;
        // return root;
      } else if (!root.right) {
        root = root.left;
      }

      //case 3: two children
      else {
        root.value = this.findMin(root.right);
        root.right = this.deleteNode(root.right, root.value);
        // console.log("mytwo child", this.deleteNode(root.right, root.value));
      }
    }

    return root;
  }

  //     9
  //  4     20
  //1  6  15  170

  //9-4-20-1-6-15-170

  breadthFirstSearch() {
    let currentNode = this.root;
    let queue = [];
    let list = [];
    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      console.log("BFS", currentNode.value);
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return list;
  }

  breadthFirstSearchRecursive(queue, list) {
    if (!queue.length) {
      return list;
    }
    let currentNode = queue.shift();
    list.push(currentNode.value);

    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }

    return this.breadthFirstSearchRecursive(queue, list);
  }

  DFSPreorder() {
    return traversePreorder(this.root, []);
  }

  DFSInorder() {
    return traverseInorder(this.root, []);
  }

  DFSPostorder() {
    return traversePostorder(this.root, []);
  }
}

//     9
//  4     20
//1  6  15  170

//left-root-right
//1-4-6-9-15-20-170
function traverseInorder(node, list) {
  if (node.left) {
    traverseInorder(node.left, list);
  }
  list.push(node.value);
  if (node.right) {
    traverseInorder(node.right, list);
  }

  return list;
}

//root-left-root
//9-4-1-6-20-15-170
function traversePreorder(node, list) {
  list.push(node.value);
  if (node.left) {
    traversePreorder(node.left, list);
  }
  if (node.right) {
    traversePreorder(node.right, list);
  }
  return list;
}

//     9
//  4     20
//1  6  15  170

//left-right-root
//1-6-4-15-170-20-9

function traversePostorder(node, list) {
  if (node.left) {
    traversePostorder(node.left, list);
  }
  if (node.right) {
    traversePostorder(node.right, list);
  }
  list.push(node.value);
  return list;
}

function traverse(node) {
  let tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

const tree = new BinarySearchTree();
tree.insert(5);
tree.insert(3);
tree.insert(10);
tree.insert(1);
tree.insert(4);
tree.insert(11);
tree.insert(9);

// console.log(tree.lookup(20));

// console.log(traverse(tree.root));
// tree.delete(5);
// console.log(traverse(tree.root));
// JSON.stringify(traverse(tree.root));

//     5
//  3     10
// 1  4   9 11

const tree2 = new BinarySearchTree();
tree2.insert(9);
tree2.insert(4);
tree2.insert(6);
tree2.insert(20);
tree2.insert(170);
tree2.insert(15);
tree2.insert(1);
// tree2.delete(170);
// traverse(tree2.root);
// console.log("BFT1", tree2.breadthFirstSearch());
// console.log("BFT2", tree2.breadthFirstSearchRecursive([tree2.root], []));
console.log("inorder", tree2.DFSInorder());

console.log("preorder", tree2.DFSPreorder());
console.log("postorder", tree2.DFSPostorder());

//     9
//  4     20//1  6  15  170
