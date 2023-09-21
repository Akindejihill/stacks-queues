

class Stack {
  constructor() {
    this.data = [];
    this.size = 0;

    //note that the the top of the stack is at the end of the data array
    this.first = {val : null}; //this.data[this.data.length - 1]
    this.last = {val : null};  //this.data[0]
  }




  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    this.data.push(val);
    this.size = this.data.length;
    this.first.val = this.data[this.data.length - 1];
    this.last.val = this.data[0];
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.data.length === 0) throw new Error("Stack is empty");
    const output = this.data.pop();
    this.size = this.data.length;
    this.first.val = this.data[this.data.length - 1];
    this.last.val = this.data[0];
    return output;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.data[this.data.length - 1];
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.data.length === 0 ? true : false;
  }
}

module.exports = Stack;
