import HashTable from "../src/directory/hashTable";
import HashTableSeparateChaining from "../src/directory/HashTableSeparateChaining";

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

const t1 = new HashTableSeparateChaining();

it("hashTableSeparateChaining", () => {
  t1.put(1, 1);
  t1.put("1", 1);
  expect(t1.size()).toBe(2);
});
