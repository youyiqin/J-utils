import { isNumber, isLetter } from "../help";
/**
 * 给定一个经过编码的字符串，返回它解码后的字符串。
编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。
 */
export default function decodeString(str: string): string {
  if (str.length === 0) return "";
  const stack = [];
  const len = str.length;
  let index = 0;
  let repeatStr = "";
  while (index < len) {
    if (isLetter(str[index]) || str[index] === "[") {
      stack.push(str[index]);
    } else if (isNumber(str[index])) {
      if (isNumber(stack[stack.length - 1])) {
        stack[stack.length - 1] += str[index];
      } else {
        stack.push(str[index]);
      }
    } else if (str[index] === "]") {
      let prevValue = stack.pop();
      while (prevValue !== "[") {
        repeatStr = prevValue + repeatStr;
        prevValue = stack.pop();
      }
      if (isNumber(stack[stack.length - 1])) {
        stack[stack.length - 1] = repeatStr.repeat(stack[stack.length - 1]);
      } else {
        stack.push(repeatStr);
      }
      repeatStr = "";
    }
    index++;
  }
  return stack.join("");
}
