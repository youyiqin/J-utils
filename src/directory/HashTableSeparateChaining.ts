import { defaultToString } from "../help";
import LinkedList from "../linkedList/index";

export default class HashTableSeparateChaining {
  table: { [name: string]: LinkedList };

  toStrFn: Function;

  count: number;

  constructor() {
    this.table = {};
    this.toStrFn = defaultToString;
    this.count = 0;
  }

  put(key: unknown, value: unknown): boolean {
    if (key !== undefined && value !== undefined) {
      const hashCode = this.getHashCode(key);
      if (this.table[hashCode] === undefined) {
        const linked = new LinkedList();
        this.table[hashCode] = linked;
      }
      this.table[hashCode].push([key, value]);
      this.count++;
      return true;
    }
    return false;
  }

  get(key: unknown): unknown {
    const hashCode = this.getHashCode(key);
    if (this.table[hashCode] && !this.table[hashCode].isEmpty()) {
      let current = this.table[hashCode].head;
      while (current) {
        if (current.val[0] === key) {
          return current.val[1];
        }
      }
      current = current.next;
    }
    return undefined;
  }

  remove(key: unknown): boolean {
    const hashCode = this.getHashCode(key);
    const linked = this.table[hashCode];
    if (linked && linked.indexOf(key) !== -1) {
      linked.remove(key);
      if (linked.isEmpty()) {
        delete this.table[hashCode];
      }
      this.count--;
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

  size() {
    return this.count;
  }
}
