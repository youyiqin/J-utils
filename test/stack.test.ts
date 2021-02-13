import Stack from "../src/stack/Stack";
import evalRPN from "../src/stack/evalRPN";
import decodeString from "../src/stack/decodeString";

it("leetcode 1381", () => {
  const s = new Stack(3);
  expect(s.push(1)).toBeUndefined();
  expect(s.push(2)).toBeUndefined();
  expect(s.pop()).toBe(2);
  expect(s.push(2)).toBeUndefined();
  expect(s.push(3)).toBeUndefined();
  expect(s.push(4)).toBeUndefined();
  expect(s.peek()).toBe(3);
  expect(s.increment(5, 100)).toBeUndefined();
  expect(s.increment(2, 100)).toBeUndefined();
  expect(s.pop()).toBe(103);
  expect(s.pop()).toBe(202);
  expect(s.pop()).toBe(201);
  expect(s.pop()).toBe(-1);
});

it("leetcode 150", () => {
  expect(evalRPN(["2", "1", "+", "3", "*"])).toBe(9);
  expect(evalRPN(["4", "13", "5", "/", "+"])).toBe(6);
  expect(
    evalRPN([
      "10",
      "6",
      "9",
      "3",
      "+",
      "-11",
      "*",
      "/",
      "*",
      "17",
      "+",
      "5",
      "+",
    ])
  ).toBe(22);
  expect(
    evalRPN([
      "-8",
      "23",
      "8",
      "-",
      "9",
      "23",
      "-",
      "-",
      "*",
      "33",
      "-8",
      "/",
      "+",
      "38",
      "-14",
      "-",
      "-",
      "-7",
      "32",
      "-19",
      "-",
      "11",
      "+",
      "+",
      "+",
      "14",
      "22",
      "-",
      "-",
      "27",
      "-9",
      "-",
      "+",
      "31",
      "+",
      "-12",
      "-11",
      "-",
      "-",
      "14",
      "+",
      "30",
      "+",
      "37",
      "30",
      "-",
      "+",
      "-9",
      "+",
      "7",
      "-",
      "37",
      "+",
      "-5",
      "13",
      "/",
      "-",
      "19",
      "-2",
      "-19",
      "12",
      "+",
      "-",
      "23",
      "+",
      "-",
      "-19",
      "-",
      "+",
      "6",
      "+",
      "-17",
      "+",
      "17",
      "+",
      "5",
      "36",
      "+",
      "-10",
      "+",
      "+",
      "23",
      "-8",
      "-",
      "-",
      "18",
      "-",
      "31",
      "-16",
      "-",
      "+",
      "34",
      "+",
      "-6",
      "+",
      "24",
      "-",
      "22",
      "-",
      "-8",
      "-",
      "28",
      "+",
      "-12",
      "+",
      "39",
      "28",
      "-7",
      "+",
      "+",
      "-14",
      "5",
      "+",
      "5",
      "+",
      "10",
      "+",
      "+",
      "+",
      "-18",
      "*",
      "10",
      "+",
      "-5",
      "11",
      "-",
      "6",
      "+",
      "-",
      "-12",
      "31",
      "+",
      "+",
      "30",
      "29",
      "-",
      "-",
      "39",
      "+",
      "13",
      "-8",
      "-5",
      "+",
      "-",
      "26",
      "19",
      "-",
      "*",
      "-",
      "10",
      "-",
      "-20",
      "5",
      "+",
      "+",
      "0",
      "-",
      "28",
      "-",
      "19",
      "/",
      "28",
      "+",
      "-18",
      "-",
      "28",
      "20",
      "+",
      "-5",
      "-19",
      "+",
      "+",
      "-",
      "-12",
      "-",
      "3",
      "-",
      "6",
      "-15",
      "+",
      "4",
      "-",
      "-",
      "38",
      "+",
      "-9",
      "-",
      "38",
      "-",
      "12",
      "-20",
      "-",
      "10",
      "5",
      "-15",
      "-",
      "-",
      "-",
      "+",
      "-11",
      "+",
      "5",
      "+",
      "2",
      "-",
      "28",
      "+",
      "-9",
      "-11",
      "-",
      "+",
      "37",
      "-",
      "-17",
      "31",
      "-",
      "2",
      "+",
      "+",
      "-16",
      "-12",
      "-",
      "-",
      "12",
      "+",
      "34",
      "-",
      "15",
      "+",
      "8",
      "+",
      "17",
      "-",
      "2",
      "-",
      "33",
      "+",
      "-5",
      "+",
      "14",
      "+",
      "29",
      "-",
      "33",
      "23",
      "+",
      "26",
      "30",
      "-",
      "+",
      "+",
      "39",
      "+",
      "9",
      "24",
      "-",
      "-",
      "20",
      "15",
      "+",
      "-",
      "24",
      "+",
      "37",
      "-",
      "30",
      "-1",
      "-",
      "+",
      "34",
      "+",
      "-13",
      "-",
      "23",
      "15",
      "-",
      "-",
      "-5",
      "-8",
      "8",
      "30",
      "35",
      "-9",
      "22",
      "+",
      "-",
      "-",
      "36",
      "-1",
      "+",
      "5",
      "-",
      "-",
      "+",
      "25",
      "-",
      "+",
      "27",
      "-",
      "16",
      "+",
      "+",
      "+",
      "39",
      "-",
      "15",
      "-",
      "-3",
      "+",
      "5",
      "-6",
      "-",
      "+",
      "-6",
      "-15",
      "-7",
      "-",
      "+",
      "/",
      "13",
      "-",
      "18",
      "+",
      "4",
      "+",
      "29",
      "+",
      "-17",
      "0",
      "-6",
      "-20",
      "-17",
      "+",
      "12",
      "-",
      "+",
      "-",
      "+",
      "+",
      "-10",
      "22",
      "+",
      "+",
      "-11",
      "-",
      "-2",
      "38",
      "-",
      "-",
      "-6",
      "+",
      "0",
      "-",
      "-10",
      "+",
      "-4",
      "-10",
      "+",
      "-",
      "0",
      "-",
      "31",
      "30",
      "-",
      "37",
      "5",
      "+",
      "+",
      "+",
      "-15",
      "+",
      "38",
      "4",
      "-",
      "-16",
      "-17",
      "+",
      "+",
      "+",
      "38",
      "-",
      "27",
      "-19",
      "/",
      "12",
      "+",
      "/",
    ])
  ).toBe(11);
});

it("leetcode 394", () => {
  expect(decodeString("3[a]2[bc]")).toBe("aaabcbc");
  expect(decodeString("3[a2[c]]")).toBe("accaccacc");
});
