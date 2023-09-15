class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  // ! Inorder traversal
  inorder(temp) {
    if (temp !== null) {
      this.inorder(temp.left);
      console.log(temp.value);
      this.inorder(temp.right);
    }
  }
  compare(temp1, temp2) {
    if (temp1 === null && temp2 === null) {
      return true;
    } else if (temp1 === null || temp2 === null) {
      return false;
    } else if (temp1.value !== temp2.value) {
      return false;
    }
    return (
      this.compare(temp1.left, temp2.left) &&
      this.compare(temp1.right, temp2.right)
    );
  }
  insert(temp, value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    var q = [];
    q.push(temp);
    while (q.length !== 0) {
      temp = q.shift();
      if (temp.left === null) {
        temp.left = newNode;
        break;
      } else {
        q.push(temp.left);
      }
      if (temp.right === null) {
        temp.right = newNode;
        break;
      } else {
        q.push(temp.right);
      }
    }
  }
}

var isSameTree = function (arr1, arr2) {
  let arr1BinaryTree = new BinaryTree();
  let arr2BinaryTree = new BinaryTree();
  // arr1.forEach((element) => {
  //   arr1BinaryTree.insert(arr1BinaryTree.root, element);
  // });
  // arr2.forEach((element) => {
  //   arr2BinaryTree.insert(arr2BinaryTree.root, element);
  // });
  for (var i = 0; i < arr1.length; i++) {
    arr1BinaryTree.insert(arr1BinaryTree.root, arr1[i]);
  }
  for (var i = 0; i < arr2.length; i++) {
    arr2BinaryTree.insert(arr2BinaryTree.root, arr2[i]);
  }
  arr1BinaryTree.inorder(arr1BinaryTree.root);
  console.log("-------------------------------------");
  arr2BinaryTree.inorder(arr2BinaryTree.root);
  console.log(arr1BinaryTree.compare(arr1BinaryTree.root, arr2BinaryTree.root));
  return arr1BinaryTree.compare(arr1BinaryTree.root, arr2BinaryTree.root);
};
isSameTree([1, 2, 1], [1, null, 1, 2]);
