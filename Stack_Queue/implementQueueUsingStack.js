class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    if (this.items.length !== 0) {
      return "UnderFlow!!!";
    }
    return this.items.pop();
  }
  peek() {
    // ! Top element of stack
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  printStack() {
    var str = "";
    this.items.forEach((element) => {
      str += element + " ";
    });
    return str;
  }
}
var MyQueue = function () {
  let inputStack = new Stack();
  let outputStack = new Stack();

  console.log("Input Stack : ", inputStack.printStack());
  QueuePush(inputStack, outputStack, 1);
  QueuePush(inputStack, outputStack, 2);
  QueuePush(inputStack, outputStack, 3);
  QueuePush(inputStack, outputStack, 4);
  QueuePush(inputStack, outputStack, 5);
  QueuePush(inputStack, outputStack, 6);
  QueuePush(inputStack, outputStack, 7);
  console.log("Output Stack : ", outputStack.printStack());
  console.log("Input Stack : ", inputStack.printStack());
  QueuePop(inputStack, outputStack);
  console.log(QueueEmpty(inputStack, outputStack));
  console.log(QueuePeek(inputStack, outputStack));
  console.log("Output Stack : ", outputStack.printStack());
  console.log("Input Stack : ", inputStack.printStack());

  // ? Queue operations  : pop() yani ilk elemenaın silinmesi outputstack.pop() iş görecek
};
let QueuePop = function (input, output) {
  if (input.items.length !== 0) {
    for (var i = input.items.length - 1; i >= 0; i--) {
      output.push(input.items[i]);
      input.items.pop();
    }
  }
  return output.items.pop();
};
let QueuePush = function (input, output, x) {
  if (output.items.length !== 0) {
    for (var i = output.items.length - 1; i >= 0; i--) {
      input.push(output.items[i]);
      output.items.pop();
    }
  }
  return input.items.push(x);
};
let QueueEmpty = function (input, output) {
  return input.items.length !== 0 || output.items.length !== 0;
};
let QueuePeek = function (input, output) {
  if (input.items.length !== 0) {
    for (var i = input.items.length - 1; i >= 0; i--) {
      output.push(input.items[i]);
      input.items.pop();
    }
  }
  return output.items[output.items.length - 1];
};
MyQueue();
