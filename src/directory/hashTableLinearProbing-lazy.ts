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
    if(this.table[position] != null) {
      if(this.table[position].key === key)
    }
  }
}
