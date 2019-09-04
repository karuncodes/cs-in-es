class Node {
  constructor(data, next) {
    this.data = data || null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(data) {
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
  pop() {
    if (this.head == null) return undefined;

    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    let newHead = current.next;
    this.head = newHead;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return current;
  }

  unShift(data) {
    let newHead = new Node(data);
    if (this.head === null) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      let currentHead = this.head;
      this.head = newHead;
      this.head.next = currentHead;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (!this.head || this.length < index || index < 0)
      throw new Error(
        `Index value ${index} not present. Seems like this list is shorter than you think. Adios!`
      );
    let retrieve = this.head;
    for (let i = 0; i < this.length; i++) {
      if (i === index) {
        return retrieve;
      }
      retrieve = retrieve.next;
    }
  }

  set(index, data) {
    try {
      let node = this.get(index);
    } catch (e) {
      console.log("error", e.toString());
      return false;
    }

    node.data = data;
  }

  insert(index, data) {
    if (!this.head || index > this.length || index < 0) {
      return false;
    }
    if (index === this.length) return !!this.push(data);
    if (index === 0) return !!this.unShift(data);
    let pre = this.head;
    let post = pre.next;
    let counter = 0;
    while (counter < index - 1) {
      pre = pre.next();
      post = post.next();
    }

    let current = new Node(data);
    current.next = pre.next;
    pre.next = current;
    this.length++;
    return this;
  }
  remove(index) {
    if (!this.head || index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();

    let pre = this.get(index - 1);
    let delNode = pre.next;
    let post = delNode.next;
    pre.next = post;
    this.length--;
    return delNode;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }
  print() {
    let arr = [];
    let start = this.head;
    for (let i = 0; i < this.length; i++) {
      arr.push(start.data);
      start = start.next;
    }
    return arr;
  }
}
