import { defaultToString } from "../help";
import LinkedList from "../linkedList/index";

export default class HashTableSeparateChaining {
  table: Object;

  toStrFn: Function;

  constructor() {
    this.table = {};
    this.toStrFn = defaultToString;
  }

  put(key: unknown, value: unknown): boolean {
    if (key !== undefined && value !== undefined) {
      const hashCode = this.getHashCode(key);
      if (this.table[hashCode] === undefined) {
        const linked = new LinkedList();
        this.table[hashCode] = linked;
      }
      this.table[hashCode].push([key, value]);
      return true;
    }
    return false;
  }

  getHashCode(key: unknown): number {
    if (typeof key === "number") return key;
    const tableKey: string = this.toStrFn(key);
    let hash = 0;
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i);
    }
    return hash % 37;
  }
}
