import { defaultToString } from "../help";

export default class Directory {
  table: Object;

  defaultToString: (item: any) => string; // eslint-disable-line

  constructor() {
    this.table = {};
    this.defaultToString = defaultToString;
  }

  set(key: unknown, value: unknown) {
    this.table[this.defaultToString(key)] = value;
  }

  remove(key: unknown): boolean {
    if (this.has(key)) {
      delete this.table[this.defaultToString(key)];
      return true;
    }
    return false;
  }

  has(key: unknown): boolean {
    return Object.prototype.hasOwnProperty.call(this.table, [key]);
  }
}
