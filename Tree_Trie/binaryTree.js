class Node {
  constructor(data, left = null, right = null) {
    this.key = data;
    this.left = left;
    this.right = right;
  }
}
class Binarytree {
  constructor() {
    this.root = null;
  }
  // ! Traversaller
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.key);
      this.inorder(node.right);
    }
  }
  getRootNode() {
    return this.root;
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

  deleteDeepest(root, delNode) {
    let q = [];
    q.push(root);
    let temp = null;
    while (q.length !== 0) {
      temp = q.shift();
      if (temp === delNode) {
        temp = null;
        return;
      }
      if (temp.left !== null) {
        if (temp.left === delNode) {
          temp.left = null;
          return;
        } else {
          q.push(temp.left);
        }
        if (temp.right !== null) {
          if (temp.right === delNode) {
            temp.right = null;
            return;
          } else {
            q.push(temp.right);
          }
        }
      }
    }
  }
  delete(root, key) {
    if (root === null) {
      return;
    }
    if (root.left === null && root.right === null) {
      if (root.key === key) {
        root = null;
        return;
      } else {
        return;
      }
    }
    let q = [];
    q.push(root);
    let keyNode,
      temp = null;
    while (q.length !== 0) {
      temp = q.shift();
      if (temp.key === key) {
        keyNode = temp;
      }
      if (temp.left !== null) {
        q.push(temp.left);
      }
      if (temp.right !== null) {
        q.push(temp.right);
      }
    }
    if (keyNode !== null) {
      let x = temp.key;
      this.deleteDeepest(root, temp);
      keyNode.key = x;
    }
  }
}

let bt = new Binarytree();

bt.insert(bt.root, 1);
bt.insert(bt.root, 12);
bt.insert(bt.root, 11);
bt.insert(bt.root, 21);
bt.inorder(bt.root);
bt.delete(bt.root, 12);
console.log("===========================");
bt.inorder(bt.root);
