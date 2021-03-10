import { Node } from "../types/index";
import { defaultEquals } from "../help";

export function ListNode(val: unknown, next = undefined) {
  this.val = val;
  this.next = next;
}

export default class LinkedList {
  head?: Node;

  count: number;

  equalsFn: Function;

  constructor(equalsFn = defaultEquals, node?: Node) {
    this.head = node;
    this.count = 0;
    this.equalsFn = equalsFn;
  }

  push(v: unknown) {
    const node = new ListNode(v);
    let current: Node;
    if (this.head === undefined) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next !== undefined) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }

  insert(v: unknown, index: number): boolean {
    if (index >= 0 && index <= this.count) {
      const node: Node = new ListNode(v);
      if (index === 0) {
        const current = this.head;
        this.head = node;
        node.next = current;
      } else {
        const prev = this.getElementAt(index - 1);
        node.next = prev.next;
        prev.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  remove(v: number): Node {
    const index = this.indexOf(v);
    return this.removeAt(index);
  }

  removeAt(index: number): Node {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      // 移除第一项
      if (index === 0) {
        this.head = current.next;
      } else {
        let prev = this.getElementAt(index - 1);
        current = prev.next;
        // 连接 prev 和 current.next
        prev.next = current.next;
      }
      this.count--;
      return current;
    }
    return undefined;
  }

  indexOf(v: unknown): number {
    let current = this.head;
    let i = 0;
    while (i <= this.count && current !== undefined) {
      if (this.equalsFn(v, current.val)) {
        return i;
      }
      i++;
      current = current.next;
    }
    return -1;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  size(): number {
    return this.count;
  }

  toString(): string {
    let res: string[] = [];
    let current = this.head;
    while (current !== undefined) {
      res.push(current.val.toString());
      current = current.next;
    }
    return res.toString();
  }

  getElementAt(index: number): Node {
    if (index >= 0 && index <= this.count) {
      let node = this.head;
      for (let i = 0; i < index && node !== null; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }
}
