import {
  strStr,
  sortColors,
  RandomizedSet,
  generateMatrix,
  buddyStrings,
} from "../src/MyArray";

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

it("leetcode 380", () => {
  const a = new RandomizedSet();
  expect(a.insert(1)).toBe(true);
  expect(a.remove(2)).toBe(false);
  expect(a.insert(2)).toBe(true);
  expect([1, 2].includes(a.getRandom())).toBe(true);

  const b = new RandomizedSet();
  expect(b.remove(0)).toBe(false);
  expect(b.remove(0)).toBe(false);
  expect(b.insert(0)).toBe(true);
  expect(b.getRandom()).toBe(0);
  expect(b.remove(0)).toBe(true);
});

it("leetcode 380 v2", () => {
  const a = new RandomizedSet();
  expect(a.insert(0)).toBe(true);
  expect(a.remove(0)).toBe(true);
  expect(a.insert(-1)).toBe(true);
  expect(a.remove(0)).toBe(false);
  expect(a.getRandom()).toBe(-1);
  expect(a.getRandom()).toBe(-1);
  expect(a.getRandom()).toBe(-1);
});

it("leetcode 59", () => {
  expect(generateMatrix(3)).toStrictEqual([
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5],
  ]);
  expect(generateMatrix(2)).toStrictEqual([
    [1, 2],
    [4, 3],
  ]);
});

it("leetcode 859", () => {
  expect(buddyStrings("aaaabc", "aaaacb")).toBe(true);
  expect(buddyStrings("aa", "aa")).toBe(true);
  expect(buddyStrings("ac", "ca")).toBe(true);
  expect(buddyStrings("", "aaaacb")).toBe(false);
  expect(buddyStrings("abab", "abab")).toBe(true);
});
