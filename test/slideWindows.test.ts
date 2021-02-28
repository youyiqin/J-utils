import lengthOfLongestSubstring from "../src/slideWindows/lengthOfLongestSubstring";
import minWindow from "../src/slideWindows/minWindow";
import { minSubArrayLength } from "../src/slideWindows/minSubArrayLength";
import { findAnagrams } from "../src/slideWindows/findAnagrams";

it("leetcode 3", () => {
  expect(lengthOfLongestSubstring("bbbcab")).toBe(3);
  expect(lengthOfLongestSubstring("abba")).toBe(2);
  expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
});

it("leetcode 76", () => {
  expect(minWindow("a", "a")).toBe("a");
  expect(minWindow("aabc", "ba")).toBe("ab");
  expect(minWindow("ADOBECODEBANC", "ABC")).toBe("BANC");
  expect(minWindow("a", "aa")).toBe("");
  expect(minWindow("aa", "aa")).toBe("aa");
  expect(minWindow("bbaa", "aba")).toBe("baa");
});

it("leetcode 209", () => {
  expect(minSubArrayLength(4, [1, 4, 4])).toBe(1);
  expect(minSubArrayLength(7, [2, 3, 1, 2, 4, 3])).toBe(2);
});

it("leetcode 438", () => {
  expect(findAnagrams("cbaebabacd", "abc")).toStrictEqual([0, 6]);
  expect(findAnagrams("abab", "ab")).toStrictEqual([0, 1, 2]);
  expect(findAnagrams("abaacbabc", "abc")).toStrictEqual([3, 4, 6]);
});
