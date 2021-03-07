import MySet from "../src/Set/index";

it("Set data struct", () => {
  const s = new MySet();
  s.add(1);
  s.add(1);
  s.add(2);
  expect(s.has(2)).toBeTruthy();
  expect(s.size()).toBe(2);
  expect(s.delete(1)).toBeTruthy();
  expect(s.size()).toBe(1);
  s.clear();
  expect(s.size()).toBe(0);
  s.add(1);
  const ss = new MySet();
  ss.add(2);
  ss.add(1);
  const unionSet = s.union(ss);
  expect(unionSet.size()).toBe(2);
  expect(unionSet.values()).toStrictEqual([1, 2]);
  expect(ss.difference(s).size()).toBe(1);
  expect(ss.difference(s).toString()).toBe("2");
  ss.delete(1);
  expect(s.isSubsetOf(ss)).toBeFalsy();
});
