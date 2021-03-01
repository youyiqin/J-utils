import { Node } from "../types/index";
import { defaultEquals } from "../help";

export function ListNode(val = 0, next = undefined) {
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

  push(v: number) {
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

  insert(v: number, position: number): boolean {}

  getElementAt(index: number): Node | undefined {}

  remove(v: number): Node {}

  removeAt(index: number): Node {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      // 移除第一项
      if (index === 0) {
        this.head = current.next;
      } else {
        let prev: Node;
        for (let i = 0; i < index; i++) {
          prev = current;
          current = current.next;
        }
        // 连接 prev 和 current.next
        prev.next = current.next;
      }
      return current;
    }
    this.count--;
    return undefined;
  }

  indexOf(v: number): number {}

  isEmpty(): boolean {}

  size(): number {
    return this.count;
  }

  toString(): string {}
}
