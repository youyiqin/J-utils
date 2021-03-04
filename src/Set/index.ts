/**
 * 集合是由一组无序且唯一的元素组成的结构,该数据结构利用了有限集合相同的数学概念,但应用在计算机科学的数据结构中
 */
export default class MySet {
  items: Object;

  count: number;

  constructor() {
    this.items = {};
    this.count = 0;
  }

  add(element: any): boolean {
    if (this.has(element)) return false;
    this.items[element] = element;
    this.count++;
    return true;
  }

  delete(element: any): boolean {
    if (this.has(element)) {
      delete this.items[element];
      this.count--;
      return true;
    }
    return false;
  }

  clear() {
    this.items = {};
    this.count = 0;
  }

  size(): number {
    return this.count;
  }

  has(element: any): boolean {
    // 不直接使用 this.items.hasOwnPrototype 方法是为了防止此方法被修改或者覆盖,甚至不是所有对象都继承了此方法
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  /**
   * 适配 ES5
   */
  values(): any[] {
    const res = [];
    for (const key in this.items) {
      if (Object.prototype.hasOwnProperty.call(this.items, key)) {
        const element = this.items[key];
        res.push(element);
      }
    }
    return res;
  }
}
