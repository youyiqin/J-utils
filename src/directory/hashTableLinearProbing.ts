import { defaultToString, ValuePair } from "../help";

export default class HashTableLinearProbing<K, V> {
  protected table: { [key: string]: ValuePair<K, V> };

  constructor(
    protected toStrFn: (key: K) => string = defaultToString,
    public size = 0
  ) {
    this.table = {};
  }

  private loseloseHashCode(key: K) {
    if (typeof key === "number") return key;
    const tableHash = this.toStrFn(key);
    let hash = 0;
    for (let i = 0; i < tableHash.length; i++) {
      const element = tableHash[i];
      hash += element.charCodeAt(i);
    }
    return hash % 37;
  }

  hashCode(key: K) {
    return this.loseloseHashCode(key);
  }

  put(key: K, value: V) {
    // 保证 key 和 value 都不能是 undefined 和 null 之一
    if (key != null && value != null) {
      const position = this.hashCode(key);
      if (this.table[position] == null) {
        this.table[position] = new ValuePair(key, value);
      } else {
        let index = position + 1;
        while (this.table[index] != null) {
          index++;
        }
        this.table[index] = new ValuePair(key, value);
        this.size++;
        return true;
      }
    }
    return false;
  }

  get(key: K) {
    const position = this.hashCode(key);
    if (this.table[position] != null) {
      if (this.table[position].key === key) {
        return this.table[position].value;
      }
      let index = position + 1;
      while (this.table[index].key != null && this.table[index].key !== key) {
        index++;
      }
      if (this.table[index] != null && this.table[index].key === key)
        return this.table[index].value;
    }
    return undefined;
  }

  remove(key: K) {
    const position = this.hashCode(key);
    if (this.table[position] != null) {
      if (this.table[position].key === key) {
        delete this.table[position];
        this.verifyRemoveSideEffect(key, position);
        this.size--;
        return true;
      }
      let index = position + 1;
      while (this.table[index] != null && this.table[index].key !== key) {
        index++;
      }
      if (this.table[index] != null && this.table[index].key === key) {
        delete this.table[index];
        this.verifyRemoveSideEffect(key, index);
        this.size--;
        return true;
      }
    }
    return false;
  }

  private verifyRemoveSideEffect(key: K, removePosition: number) {
    const hash = this.hashCode(key);
    let index = removePosition + 1;
    while (this.table[index] != null) {
      const posHash = this.hashCode(this.table[index].key);
      if(posHash <= hash || posHash <= removePosition) {
        
      }
    }
  }
}
