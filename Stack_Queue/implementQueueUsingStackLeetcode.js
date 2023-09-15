class MyQueue {
  constructor() {
    this.items = [];
    this.input = [];
  }
  push(x) {
    this.input.push(x);
    return x;
  }
  pop() {
    if (this.items.length !== 0) {
      return this.items.pop();
    } else if (this.input.length !== 0) {
      for (var i = this.input.length - 1; i > -1; i--) {
        this.items.push(this.input[i]);
      }
      this.input = [];
      return this.items.pop();
    }
  }
  peek() {
    console.log("this.items : ", this.items);
    if (this.items.length !== 0) {
      return this.items[this.items.length - 1];
    } else {
      for (var i = this.input.length - 1; i > -1; i--) {
        this.items.push(this.input[i]);
      }
      this.input = [];
      return this.items[this.items.length - 1];
    }
  }
  empty() {
    return this.items.length === 0 && this.input.length === 0;
  }
}

var obj = new MyQueue();
obj.push(null);
obj.push(null);
obj.push(1);
obj.push(12);
obj.push(11);
obj.push(null);
var param_2 = obj.pop();
var param_3 = obj.peek();
var param_4 = obj.empty();
console.log("param2 : ", param_2);
console.log("param3 : ", param_3);
console.log("param4 : ", param_4);
