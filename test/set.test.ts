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
});
