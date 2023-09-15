class maxHeap {
  constructor() {
    this.heap = [];
  }
  leftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }
  rightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }
  parentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }
  hasLeftChild(index) {
    return this.leftChildIndex(index) < this.heap.length;
  }
  hasRightChild(index) {
    return this.rightChildIndex(index) < this.heap.length;
  }
  hasParent(index) {
    return this.parentIndex(index) >= 0;
  }
  rightChild(index) {
    return this.heap[this.rightChildIndex(index)];
  }
  leftChild(index) {
    return this.heap[this.leftChildIndex(index)];
  }
  parent(index) {
    return this.heap[this.parentIndex(index)];
  }
  swap(indexOne, indexTwo) {
    const temp = this.heap[indexOne];
    this.heap[indexOne] = this.heap[indexTwo];
    this.heap[indexTwo] = temp;
  }
  add(item) {
    this.heap.push(item);
    this.heapifyUp();
  }
  heapifyUp() {
    let index = this.heap.length - 1;
    while (this.hasParent(index) && this.parent(index) < this.heap[index]) {
      this.swap(this.parentIndex(index), index);
      index = this.parentIndex(index);
    }
  }
  remove() {
    //remove  Top element
    let index = this.heap.length - 1;
    const deletedItem = this.heap[0];
    this.heap[0] = this.heap[index];
    this.heap.pop();
    this.heapifyDown();
    return deletedItem;
  }
  heapifyDown() {
    let index = 0;
    let biggerChildIndex = 0;
    while (this.hasLeftChild(index)) {
      biggerChildIndex = this.leftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.rightChild(index) > this.leftChild(index)
      ) {
        biggerChildIndex = this.rightChildIndex(index);
      }
      if (this.heap[index] > this.heap[biggerChildIndex]) break;
      else this.swap(index, biggerChildIndex);
    }
  }
  printHeap() {
    for (var i = 0; i < this.heap.length; i++) {
      console.log(this.heap[i]);
    }
  }
}
var heap = new maxHeap();
heap.add(10);
heap.add(15);
heap.add(30);
heap.add(40);
heap.add(50);
heap.add(100);
heap.add(40);
console.log("____________________________");
heap.printHeap();

// Peeking And Removing Top Element
console.log("____________________________");

console.log(heap.remove());
console.log("____________________________");

heap.printHeap();
