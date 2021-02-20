import lengthOfLongestSubstring from "../src/slideWindows/lengthOfLongestSubstring";
import minWindow from "../src/slideWindows/minWindow";

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
