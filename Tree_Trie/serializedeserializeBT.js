class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(node, data) {
    let newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    var q = [];
    q.push(node);
    while (q.length !== 0) {
      node = q.shift();
      if (node.left === null) {
        node.left = newNode;
        break;
      } else {
        q.push(node.left);
      }
      if (node.right === null) {
        node.right = newNode;
        break;
      } else {
        q.push(node.right);
      }
    }
  }
  serialize(root) {
    if (root.length === 0) return [];
    for (var i = 0; i < root.length; i++) {
      this.insert(this.root, root[i]);
    }
    return this.root;
  }
  deserialize(data) {
    if (data.length === 0) return [];
    var result = [];
    let q = [];
    var levelOrder = function (data) {
      q.push(data);
      let temp = null;
      while (q.length !== 0) {
        temp = q.shift();
        temp !== null ? result.push(temp.data) : result.push(null);
        if (temp !== null) {
          console.log(temp);
          if (temp.left !== null) {
            q.push(temp.left);
          }
          if (temp.right !== null) {
            q.push(temp.right);
          }
        }
      }
    };
    levelOrder(data);
    console.log(result);
    return result;
  }
}
let deserialize = function (root) {
  let bt = new BinaryTree();
  return bt.deserialize(root);
};
let serialize = function (data) {
  let bt = new BinaryTree();
  return bt.serialize(data);
};

let tree = deserialize(serialize([]));
console.log(tree);
