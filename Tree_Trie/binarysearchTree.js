class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
      return;
    } else {
      return this.insertNewNode(this.root, newNode);
    }
  }
  insertNewNode(node, newNode) {
    if (node.data > newNode.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNewNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNewNode(node.right, newNode);
      }
    }
  }

  inorderTraversal(node) {
    // console.log("İnorder Traversal Gelen Node değeri :", node);
    if (node !== null) {
      this.inorderTraversal(node.left);
      console.log(node.data);
      this.inorderTraversal(node.right);
    }
  }
  preOrderTraversal(node) {
    if (node !== null) {
      console.log(node.data);
      this.preOrderTraversal(node.left);
      this.preOrderTraversal(node.right);
    }
  }
  postOrderTraversal(node) {
    if (node !== null) {
      this.postOrderTraversal(node.left);
      this.postOrderTraversal(node.right);
      console.log(node.data);
    }
  }

  findMinValue(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinValue(node.left);
    }
  }
  findMaxValue(node) {
    if (node.right !== null) {
      return this.findMaxValue(node.right);
    } else {
      return node.data;
    }
  }

  removeNode(node, data) {
    if (node === null) {
      return node;
    } else if (node.data > data) {
      node.left = this.removeNode(node.left, data);
    } else if (node.data < data) {
      node.right = this.removeNode(node.right, data);
    } else {
      if (node.left === null && node.right === null) {
        node = null;
      } else if (node.left === null) {
        node = node.right;
      } else if (node.right === null) {
        node = node.left;
      } else {
        // node with two child
        var temp = this.findMinValue(node.right);
        node.data = temp.data;
        node.right = this.removeNode(node.right, temp.data);
      }
    }
    return node;
  }
  searchNode(node, data) {
    if (node === null) {
    } else if (node.data > data) {
      this.searchNode(node.left, data);
    } else if (node.data < data) {
      this.searchNode(node.right, data);
    }
    return node;
  }
  getRootNode() {
    return this.root;
  }
}

let bst = new BST();
bst.add(15);
bst.add(25);
bst.add(10);
bst.add(7);
bst.add(22);
bst.add(17);
bst.add(13);
bst.add(5);
bst.add(9);
bst.add(27);

let root = bst.getRootNode();
console.log("Serach Node : ", bst.searchNode(root, 10));
bst.inorderTraversal(root);
console.log("inorder yukarda ________________________________________");
bst.preOrderTraversal(root);
console.log("preorder yukarda________________________________________");
bst.postOrderTraversal(root);
console.log("postorder yukarda________________________________________");

console.log("FindMin Value : ", bst.findMinValue(root));
console.log("Find Max Value :", bst.findMaxValue(root));
bst.removeNode(root, 5);
root = bst.getRootNode();
console.log("İnorder öncesi elimizdeki root :", root);
bst.inorderTraversal(root);
console.log("inorder traversal 2 ________________________________________");
bst.removeNode(root, 7);
root = bst.getRootNode();

bst.inorderTraversal(root);
console.log("________________________________________");
