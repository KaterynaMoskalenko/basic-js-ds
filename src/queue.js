const { NotImplementedError } = require('../lib/errors');
const { ListNode } = require('../extensions/list-node.js');

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
    this.head = null;
    this.tail = null;
    this.length = 0;    
  }
  
  getUnderlyingList() {
    // Remove line below and write your code here
    return this.head;
  }

  enqueue(value) {
    // Remove line below and write your code here
    const newCurrent = new ListNode(value);
    if (this.length === 0) {
    this.head = newCurrent;
    this.tail = newCurrent; // the same object but diferent link this.head and this.tail
    } else {
      this.tail.next = newCurrent;
      this.tail = newCurrent;
    }
       this.length++;     
  }

  dequeue() {
    // Remove line below and write your code here
    if (!this.head) return null; // there is noth;
    const removeVal = this.head.value
    this.head = this.head.next;
    this.length--;
    
    //if que became empty, anuliren tail
    if (!this.head) {
      this.tail = null;
    }
    return removeVal;
  }
  
  insert(position, value) {
    if (position < 0 || position > this.length) {
      return false;
    }
    
    let currentNew = new ListNode(value);
    
    if (position === 0) {
      currentNew.next = this.head;
      this.head = currentNew;
    } else {
      let current = this.head;
      let prev = null;
      
      let ind = 0;
      // 1-> 2-> 3-> 4
      //   current 
      //    prev  curr
      while (ind < position) {
        prev = current;
        current = current.next;
        ind++;        
      }
      // 1-> 2 -> 3 -> 4
      //   prev->newCur->curr
      prev.next = currentNew //link new Value from prev to CurNew
      currentNew.next = current;      // link from CurNew to next (current)
    }
    this.length++;
  }
}

module.exports = {
  Queue
};
