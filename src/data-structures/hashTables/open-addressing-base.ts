import { Hashable } from "./entry";

// Code is based off William Fiset's implementation
abstract class HashTableOpenAddressingBase<K extends Hashable, V> {
  private DEFAULT_CAPACITY = 7; // 容量

  // Special marker token use to indicate the deletion of a key-value pair
  protected TOMBSTONE: K = {} as K;

  protected keyList: Array<K>;

  protected valueList: Array<V | null>;

  protected capacity: number; // 容量

  protected maxLoadFactor: number; // 最大加载因子

  protected threshold: number; // 临界点

  protected modificationCount: number; // 修改次数

  protected usedBuckets: number; // 统计已经使用的桶的总数, 包括已删除的

  protected keyCount: number; // 键的数量

  constructor(caparity: number, maxLoadFactor: number) {
    if (caparity < 0) throw new Error("非法容量");
    if (maxLoadFactor <= 0) throw new Error("非法的装载因子");

    this.capacity = Math.max(this.DEFAULT_CAPACITY, caparity);
    this.maxLoadFactor = maxLoadFactor;
    this.adjustCapacity();
    this.threshold = Math.trunc(this.capacity * this.maxLoadFactor);
    this.modificationCount = 0;
    this.usedBuckets = 0;
    this.keyCount = 0;
    this.keyList = new Array<K>(this.capacity);
    this.valueList = new Array<V>(this.capacity);
  }

  /**
   * ABSTRACT FUNCTION
   * 这三个抽象方法的实现将影响到后续的数据操作实现
   */
  abstract setupProbing(key: K): void;

  // Adjusts the capacity of the hash table after it's been made larger.
  // This is important to be able to override because the size of the hashtable
  // controls the functionality of the probing function.

  /**
   * 线性探查和扩容相关
   */
  abstract adjustCapacity(): void;

  abstract probe(x: number): number;

  /**
   * 基础方法: 返回哈希表的大小 - O(1)
   */
  size(): number {
    return this.keyCount;
  }

  /**
   * 如果是空表则返回 true, 否则返回 false - O(1)
   */
  isEMpty(): boolean {
    return this.size() === 0;
  }

  /**
   * 返回当前容量
   * @returns number
   */
  getCapacity(): number {
    return this.capacity;
  }

  /**
   * clear the hashtable - O(1)
   * @returns void
   */
  clear(): void {
    this.keyCount = 0;
    this.valueList.length = 0;
    this.keyList.length = 0;

    this.usedBuckets = 0;
    this.modificationCount += 1;
  }

  /**
   * 检查是否存在 key
   * @param  {K} key
   * @returns boolean
   */
  containsKey(key: K): boolean {
    return this.get(key) !== null;
  }

  /**
   * 返回所有当前在使用的 key 值的 list
   * @returns K[]
   */
  keys(): K[] {
    const keys: K[] = [];
    for (let key of this.keyList) {
      if (key && key !== this.TOMBSTONE) keys.push(key);
    }
    return keys;
  }

  values(): V[] {
    const values: V[] = [];
    for (let i = 0; i < this.keyList.length; i++) {
      if (this.keyList[i] && this.keyList[i] !== this.TOMBSTONE) {
        values.push(values[i]);
      }
    }
    return values;
  }

  get(key: K): V {}
}

export default HashTableOpenAddressingBase;
