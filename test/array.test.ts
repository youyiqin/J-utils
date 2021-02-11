import { strStr, sortColors } from "../src/MyArray";

it("leetcode 28", () => {
  expect(strStr("12345abc", "ab")).toBe(5);
  expect(strStr("12345", "")).toBe(0);
  expect(strStr("12345", "2")).toBe(1);
});

it("leetcode 75", () => {
  expect(sortColors([2, 0, 2, 1, 1, 0])).toStrictEqual([0, 0, 1, 1, 2, 2]);
  expect(sortColors([1, 0, 2, 1, 1, 0])).toStrictEqual([0, 0, 1, 1, 1, 2]);
  expect(sortColors([0, 0, 2, 1, 1, 0])).toStrictEqual([0, 0, 0, 1, 1, 2]);
  expect(sortColors([0, 0, 2, 2, 2, 0])).toStrictEqual([0, 0, 0, 2, 2, 2]);
  expect(sortColors([1, 0, 2, 1, 1, 1])).toStrictEqual([0, 1, 1, 1, 1, 2]);
});
