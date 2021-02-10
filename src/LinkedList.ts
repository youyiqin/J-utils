import { Node } from "./types/index";

export function ListNode(val = 0, next = null) {
  this.val = val;
  this.next = next;
}

export default class LinkedList {
  private head?: Node;

  constructor(node?: Node) {
    this.head = node ?? null;
  }

  add(x: number) {
    const node = new ListNode(x);
    if (!this.head) {
      this.head = node;
    } else {
      let head = this.head;
      while (head) {
        if(!head.next) {
          
        }
      }
    }
  }

  toString() {
    let r = "";
    const next = this.head;
    while (next) {
      r += `${next.val}, `;
    }
    console.log(r);
  }

  getHead() {
    return this.head;
  }
}
