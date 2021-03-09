import HashTable from "../src/directory/hashTable";

const t = new HashTable();

it("hashTable", () => {
  t.put("youyi", 26);
  t.put("wl", 26);
  expect(t.get("wl")).toBe(26);
  expect(t.get("youyi")).toBe(26);
  expect(t.remove("youyi")).toBeTruthy();
  expect(t.remove("youyi")).toBeFalsy();
  expect(t.has("wl")).toBeTruthy();
  expect(t.has("lw")).toBeFalsy();
});
