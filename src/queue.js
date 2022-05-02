const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.queue = [];
  }
  getUnderlyingList() {
    console.log(this.queue);
    let getList = (i) => {
      return (i == this.queue.length) ?
        null :
        {
          value: this.queue[i],
          next: getList(i + 1)
        }
    }
    return getList(0);

    // remove line with error and write your code here
  }

  enqueue(value) {
    this.queue.reverse()
    this.queue.push(value);
    this.queue.reverse();

    // remove line with error and write your code here
  }

  dequeue() {
    return this.queue.pop();
    // remove line with error and write your code here
  }
}

module.exports = {
  Queue
};
