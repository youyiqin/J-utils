import { defaultToString, ValuePairLazy } from "../help";

export default class HashTableLinearProbingLazy<K, V> {
  protected table: { [key: string]: ValuePairLazy<K, V> };

  constructor(
    public size = 0,
    protected toStrFn: (key: K) => string = defaultToString
  ) {
    this.table = {};
  }

  private loseloseHashCode(key: K) {
    if (typeof key === "number") return key;
    const tableKey = this.toStrFn(key);
    let hash = 0;
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i);
    }
    return hash % 37;
  }

  hashCode(key: K): number {
    return this.loseloseHashCode(key);
  }

  put(key: K, value: V): boolean {
    if (key != null && value != null) {
      const position = this.hashCode(key);
      if (
        this.table[position] === undefined ||
        (this.table[position] != null && this.table[position].isDeleted)
      ) {
        this.table[position] = new ValuePairLazy(key, value);
      } else {
        let index = position + 1;
        while (this.table[index] != null && !this.table[position].isDeleted) {
          index++;
        }
        this.table[index] = new ValuePairLazy(key, value);
      }
      this.size++;
      return true;
    }
    return false;
  }

  get(key: K) {
    const position = this.hashCode(key);
    const table = this.table;
    if (table[position] != null) {
      if (table[position].key === key && table[position].isDeleted === false) {
        return table[position].value;
      }
      let index = position + 1;
      while (
        table[index] != null &&
        (table[index].key !== key || table[index].isDeleted)
      ) {
        index++;
      }
      if (
        table[index] != null &&
        table[index].key === key &&
        !table[index].isDeleted
      ) {
        return table[index].value;
      }
    }
    return undefined;
  }

  remove(key: K): boolean {
    let position = this.hashCode(key);
    const { table } = this;
    if (table[position] != null) {
      if (table[position].key === key && !table[position].isDeleted) {
        table[position].isDeleted = true;
        this.size--;
        return true;
      }
      position++;
      while (table[position].key !== key || table[position].isDeleted) {
        position++;
      }
      if (
        table[position] != null &&
        table[position].key === key &&
        !table[position].isDeleted
      ) {
        table[position].isDeleted = true;
        this.size--;
        return true;
      }
    }
    return false;
  }

  isEmpty() {
    return this.size === 0;
  }

  clear() {
    this.size = 0;
    this.table = {};
  }

  getTable() {
    return this.table;
  }

  toString(): string {
    if (this.isEmpty()) return "";
    const keys = Object.keys(this.table);
    let objStr = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;
    for (let i = 1; i < keys.length; i++) {
      objStr = `${objStr}, {${keys[i]} => ${this.table[keys[i]].toString()}}`;
    }
    return objStr;
  }
}
