/**
 * 实现 strStr() 函数。
 * 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。

示例 1:

输入: haystack = "hello", needle = "ll"
输出: 2
示例 2:

输入: haystack = "aaaaa", needle = "bba"
输出: -1
说明:

当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

// eslint-disable-next-line no-irregular-whitespace
对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。
 
*/
export function strStr(haystack: string, needle: string): number {
  if (needle === "") return 0;
  return haystack.indexOf(needle);
}

/**
给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
示例 1：
输入：nums = [2,0,2,1,1,0]
输出：[0,0,1,1,2,2]
 */
export function sortColors(nums: number[]): number[] {
  const colorsCount = [0, 0, 0];
  for (let i = 0; i < nums.length; i += 1) {
    colorsCount[nums[i]] += 1;
  }
  let j = 0;
  for (let i = 0; i < colorsCount.length; i += 1) {
    while (colorsCount[i]) {
      nums[j] = i; // eslint-disable-line
      j += 1;
      colorsCount[i] -= 1;
    }
  }
  return nums;
}

/**
 * 设计一个支持在平均 时间复杂度 O(1) 下，执行以下操作的数据结构。
insert(val)：当元素 val 不存在时，向集合中插入该项。
remove(val)：元素 val 存在时，从集合中移除该项。
getRandom：随机返回现有集合中的一项。每个元素应该有相同的概率被返回。
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/insert-delete-getrandom-o1
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

export class RandomizedSet {
  content: Map<number, number>;

  valuesArr: number[];

  constructor() {
    this.content = new Map();
    this.valuesArr = [];
  }

  insert(val: number): boolean {
    if (this.content.has(val)) {
      return false;
    }
    this.content.set(val, this.valuesArr.length);
    this.valuesArr.push(val);
    return true;
  }

  remove(val: number): boolean {
    if (this.content.has(val)) {
      if (this.valuesArr[this.valuesArr.length - 1] === val) {
        this.valuesArr.pop();
      } else {
        const deleteIndex = this.content.get(val);
        this.valuesArr[deleteIndex] = this.valuesArr[this.valuesArr.length - 1];
        this.valuesArr.pop();
        this.content.set(this.valuesArr[deleteIndex], deleteIndex);
      }
      return this.content.delete(val);
    }
    return false;
  }

  getRandom(): number {
    return this.valuesArr[Math.floor(Math.random() * this.content.size)];
  }
}

/**
 * 59. 螺旋矩阵 II
给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
![](https://assets.leetcode.com/uploads/2020/11/13/spiraln.jpg)
输入：n = 3
输出：[[1,2,3],[8,9,4],[7,6,5]]
 */

export function generateMatrix(n: number): number[][] {
  const resultArr = Array.from({ length: n }, () => Array(n));
  let num = 1;
  const endNum = n * n;
  let rowStart = 0;
  let rowEnd = n - 1;
  let columnStart = 0;
  let columnEnd = n - 1;
  while (num <= endNum) {
    // 首行
    for (let i = columnStart; i <= columnEnd; i++) {
      resultArr[rowStart][i] = num++;
    }
    rowStart++;
    // 尾列
    for (let i = rowStart; i <= rowEnd; i++) {
      resultArr[i][columnEnd] = num++;
    }
    columnEnd--;
    // 尾行
    for (let i = columnEnd; i >= columnStart; i--) {
      resultArr[rowEnd][i] = num++;
    }
    rowEnd--;
    // 首列
    for (let i = rowEnd; i >= rowStart; i--) {
      resultArr[i][columnStart] = num++;
    }
    columnStart++;
  }
  return resultArr;
}

/**
 * 给定两个由小写字母构成的字符串 A 和 B ，只要我们可以通过交换 A 中的两个字母得到与 B 相等的结果，就返回 true ；
 * 否则返回 false 。
 交换字母的定义是取两个下标 i 和 j （下标从 0 开始），只要 i!=j 就交换 A[i] 和 A[j] 处的字符。
 例如，在 "abcd" 中交换下标 0 和下标 2 的元素可以生成 "cbad" 。
 */
export function buddyStrings(A: string, B: string): boolean {
  if (A.length !== B.length || A.length + B.length <= 2) return false;
  if (A === B) {
    return A.length > new Set(A).size;
  }
  const indexArr: number[] = [];
  for (let index = 0; index < A.length; index++) {
    if (A[index] !== B[index]) {
      indexArr.push(index);
    }
  }
  if (
    indexArr.length === 2 &&
    A[indexArr[0]] === B[indexArr[1]] &&
    B[indexArr[0]] === A[indexArr[1]]
  ) {
    return true;
  }
  return false;
}
