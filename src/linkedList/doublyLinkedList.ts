import { ListNode } from "./index";

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

export default class DoublyLinkedList {}
