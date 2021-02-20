/**
 * leetcode 76
 */
export default function minWindow(s: string, t: string): string {
  let leftIndex = 0;
  let rightIndex = 0;
  let obj: { [name: string]: number } = {};
  let missingType = 0;
  for (let i = 0; i < t.length; i++) {
    if (obj[t[i]]) {
      obj[t[i]]++;
    } else {
      missingType++;
      obj[t[i]] = 1;
    }
  }
  let res = "";
  while (rightIndex < s.length) {
    let rightChar = s[rightIndex];
    if (obj[rightChar] !== undefined) obj[rightChar]--;
    if (obj[rightChar] === 0) missingType--;
    while (missingType === 0) {
      let subString = s.substring(leftIndex, rightIndex + 1);
      if (res === "") {
        res = subString;
      } else {
        res = res.length < subString.length ? res : subString;
      }
      const _ = s[leftIndex];
      if (obj[_] !== undefined) {
        obj[_]++;
        if (obj[_] === 1) missingType++;
      }
      leftIndex++;
    }
    rightIndex++;
  }
  return res;
}
/**
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。
 * 如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
注意：如果 s 中存在这样的子串，我们保证它是唯一的答案。
示例 1：
输入：s = "ADOBECODEBANC", t = "ABC"
输出："BANC"
示例 2：
输入：s = "a", t = "a"
输出："a"
提示：

1 <= s.length, t.length <= 105
s 和 t 由英文字母组成

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/minimum-window-substring
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
