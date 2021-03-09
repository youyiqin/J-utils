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
      this.table[this.hashCode(key)] = {
        key,
        value,
      };
      return true;
    }
    return false;
  }

  hashCode(key: unknown): string {
    return `${this.loseloseHashCode(key)}${key}`;
  }

  remove(key: unknown): boolean {
    const hash = this.hashCode(key);
    const valuePair = this.table[hash];
    if (valuePair !== undefined) {
      delete this.table[hash];
      return true;
    }
    return false;
  }

  get(key: unknown): any {
    return this.table[this.hashCode(key)]?.value;
  }

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

  has(key: unknown): boolean {
    return Object.prototype.hasOwnProperty.call(this.table, this.hashCode(key));
  }

  values() {
    return Object.values(this.table);
  }
}
