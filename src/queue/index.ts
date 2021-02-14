export default class Queue {
  count: number;

  lowestCount: number;

  items: Object;

  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  enqueue(item: unknown) {
    this.items[this.count++] = item;
  }

  dequeue(): unknown {
    if (this.isEmpty()) {
      return undefined;
    }
    const _ = this.items[this.lowestCount];
    delete this.items[this.lowestCount++];
    return _;
  }

  peek() {
    return this.items[this.lowestCount];
  }

  isEmpty() {
    return this.count === this.lowestCount;
  }

  size() {
    return this.count - this.lowestCount;
  }
}
