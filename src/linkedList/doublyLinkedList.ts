class DoublyNode {
  val: number | string;

  prev: DoublyNode;

  next: DoublyNode;

  constructor(v: number | string) {
    this.val = v;
    this.prev = undefined;
    this.next = undefined;
  }
}

export default class DoublyLinkedList {
  head: DoublyNode;

  count: number;

  constructor() {
    this.count = 0;
    this.head = undefined;
  }

  size(): number {
    return this.count;
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  push(v: number) {
    const node = new DoublyNode(v);
    let current = this.head;
    if (current === undefined) {
      this.head = node;
    } else if (current.next === undefined) {
      node.next = current;
      node.prev = current;
      current.next = node;
      current.prev = node;
    } else {
      node.prev = current.prev;
      node.next = current;
      current.prev.next = node;
      current.prev = node;
    }
    this.count++;
  }

  insert(v: number, index: number): boolean {
    if (this.isEmpty()) return false;
    if (index >= 0 && index < this.count) {
      const node = new DoublyNode(v);
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      node.prev = current.prev;
      node.next = current;
      current.prev.next = node;
      current.prev = node;
      this.count++;
      if (index === 0) this.head = node;
      return true;
    }
    return false;
  }

  remove(v: number): DoublyNode {
    if (this.has(v)) {
      let current = this.head;
      while (current.val !== v) {
        current = current.next;
      }
      current.next.prev = current.prev;
      current.prev.next = current.next;
      return current;
    }
    return undefined;
  }

  has(v: number): boolean {
    let current = this.head;
    for (let i = 0; i < this.count; i++) {
      if (current.val === v) return true;
    }
    return false;
  }

  getElementIndex(v: number): number {
    if (this.isEmpty()) return undefined;
    let current = this.head;
    for (let i = 0; i < this.count; i++) {
      if (current.val === v) return i;
      current = current.next;
    }
    return undefined;
  }

  toString(): string {
    let res = "";
    if (this.isEmpty()) return res;
    let current = this.head;
    res += current.val;
    for (let i = 1; i < this.count; i++) {
      current = current.next;
      res = `${res},${current.val}`;
    }
    return res;
  }
}
