export default class MinStack {
  items: Object;

  index: number;

  minValue: number;

  constructor() {
    this.items = {};
    this.index = 0;
    this.minValue = undefined;
  }

  push(x: number) {
    this.items[++this.index] = x;
    if (this.minValue === undefined || x < this.minValue) {
      this.minValue = x;
    }
  }

  pop() {
    const _ = this.items[this.index];
    delete this.items[this.index--];
    if (this.minValue === _) {
      this.minValue = Object.values(this.items).sort((a, b) => a - b)[0];
    }
    return _;
  }

  top() {
    return this.items[this.index];
  }

  getMin() {
    return this.minValue;
  }
}
