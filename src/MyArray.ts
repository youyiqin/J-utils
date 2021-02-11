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
