import lengthOfLongestSubstring from "../src/slideWindows/lengthOfLongestSubstring";
import minWindow from "../src/slideWindows/minWindow";

it("leetcode 3", () => {
  expect(lengthOfLongestSubstring("bbbcab")).toBe(3);
  expect(lengthOfLongestSubstring("abba")).toBe(2);
  expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
});

it("leetcode 76", () => {
  expect(minWindow("a", "a")).toBe("a");
  expect(minWindow("issadciuae", "ai")).toBe("iua");
});
