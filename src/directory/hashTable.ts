import { defaultToString } from "../help";

export default class HashTable {
  defaultToString: Function;

  table: {
    [name: string]: {
      key: any;
      value: any;
    };
  };

  constructor() {
    this.defaultToString = defaultToString;
    this.table = {};
  }

  put(key: unknown, value: unknown): boolean {
    if (key && value) {
      const position = this.loseloseHashCode(key);
      this.table[position] = {
        key,
        value,
      };
      return true;
    }
    return false;
  }

  remove(key: unknown): boolean {}

  get(key: unknown): any {}

  loseloseHashCode(key: unknown): number {
    if (typeof key === "number") {
      return key;
    }
    const tableKey = this.defaultToString(key);
    let hash = 0;
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i);
    }
    return hash % 37;
  }
}
