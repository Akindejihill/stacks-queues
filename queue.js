const {LinkedList} = require('./linked-list');


/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor(vals = []) {
    this.list = new LinkedList(vals);
    // this.first = null;
    // this.last = null;
    // this.size = 0;
  }

  get first(){
    return this.list.head;
  }

  get last(){
    return this.list.tail;
  }

  get size(){
    return this.list.length;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    this.list.push(val);
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    const result = this.list.shift();
    if (result === -1) {
      throw new Error("The queue is empty");
    } else return result;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.list.head.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0 ? true : false;
  }
}

module.exports = Queue;
