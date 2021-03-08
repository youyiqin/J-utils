import Directory from "../src/directory/index";

it("data structor: Directory", () => {
  const d = new Directory();
  d.set("name", "qyy");
  expect(d.get("name")).toBe("qyy");
  d.set("age", 333);
  expect(d.size()).toBe(2);
  expect(d.isEmpty()).toBeFalsy();
  d.clear();
  expect(d.isEmpty()).toBeTruthy();
  d.set("name", "aaron");
  d.set("age", 100);
  expect(d.values()).toStrictEqual(["aaron", 100]);
});
