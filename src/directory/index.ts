import { defaultToString } from "../help";

export default class Directory {
  table: Object;

  count: number;
  defaultToString: (item: any) => string; // eslint-disable-line

  constructor() {
    this.table = {};
    this.count = 0;
    this.defaultToString = defaultToString;
  }

  set(key: unknown, value: unknown) {
    if (!this.has(this.defaultToString(key))) {
      this.count++;
    }
    this.table[this.defaultToString(key)] = value;
  }

  remove(key: unknown): boolean {
    if (this.has(key)) {
      delete this.table[this.defaultToString(key)];
      this.count--;
      return true;
    }
    return false;
  }

  get(key: unknown): any {
    return this.table[this.defaultToString(key)];
  }

  clear() {
    this.table = {};
    this.count = 0;
  }

  size() {
    return this.count;
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  keys(): unknown[] {
    return Object.keys(this.table);
  }

  values(): unknown[] {
    return Object.values(this.table);
  }

  keyValues(): [string, any][] {
    return Object.entries(this.table);
  }

  forEach(fn: Function): void {
    this.keyValues().every((i) => {
      const key = i[0];
      const value = i[1];
      return fn(key, value) === true;
    });
  }

  has(key: unknown): boolean {
    return Object.prototype.hasOwnProperty.call(this.table, [key]);
  }
}
