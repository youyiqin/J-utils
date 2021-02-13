/**
 * 实现自定义栈类 CustomStack ：
CustomStack(int maxSize)：用 maxSize 初始化对象，maxSize 是栈中最多能容纳的元素数量，
栈在增长到 maxSize 之后则不支持 push 操作。
void push(int x)：如果栈还未增长到 maxSize ，就将 x 添加到栈顶。
int pop()：弹出栈顶元素，并返回栈顶的值，或栈为空时返回 -1 。
void inc(int k, int val)：栈底的 k 个元素的值都增加 val 。如果栈中元素总数小于 k ，则栈中的所有元素都增加 val 。
 */
export default class Stack {
  content: Object;

  maxSize: number;

  size: number;

  constructor(maxSize: number) {
    this.content = {};
    this.size = 0;
    this.maxSize = maxSize;
  }

  push(val: number): void {
    if (this.size < this.maxSize) this.content[++this.size] = val;
  }

  pop(): number {
    if (this.isEmpty()) return -1;
    const _ = this.content[this.size];
    delete this.content[this.size--];
    return _;
  }

  peek() {
    return this.content[this.size] ?? -1;
  }

  increment(k: number, val: number): void {
    let i = 1;
    while (this.content[i] && i <= k) {
      this.content[i] += val;
      i++;
    }
  }

  isEmpty(): boolean {
    return this.size === 0;
  }
}
