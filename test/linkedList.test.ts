import LinkedList from "../src/linkedList/index";

const l = new LinkedList();
l.push(1);
l.push(2);
it("linkedList data structure", () => {
  expect(l.size()).toBe(2);
  expect(l.toString()).toBe("1,2");
  expect(l.isEmpty()).toBeFalsy();
  l.insert(1.2, 1);
  expect(l.toString()).toBe("1,1.2,2");
});
