import { numberOrString } from "../types/index";

export default class Deque {
  items: Object;

  maxIndex: number;

  minIndex: number;

  constructor() {
    this.items = {};
    this.maxIndex = 0;
    this.minIndex = 0;
  }

  addFront(e: numberOrString) {
    this.items[--this.minIndex] = e;
  }

  addBack(e: numberOrString) {
    this.items[++this.maxIndex] = e;
  }

  removeFront() {
    if (this.isEmpty()) return undefined;
    const _ = this.items[this.minIndex];
    delete this.items[this.minIndex++];
    return _;
  }

  removeBack() {
    if (this.isEmpty()) return undefined;
    const _ = this.items[this.maxIndex];
    delete this.items[this.maxIndex--];
    return _;
  }

  peekFront() {
    return this.items[this.minIndex] || this.items[this.minIndex + 1];
  }

  peekBack() {
    return this.items[this.maxIndex] || this.items[this.maxIndex - 1];
  }

  isEmpty() {
    return this.minIndex === this.maxIndex;
  }

  clear() {
    this.items = {};
    this.minIndex = 0;
    this.maxIndex = 0;
  }

  size() {
    return this.maxIndex - this.minIndex;
  }

  toString() {
    return Object.values(this.items).toString();
  }
}
