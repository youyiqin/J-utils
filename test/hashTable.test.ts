import HashTable from "../src/directory/hashTable";
import HashTableSeparateChaining from "../src/directory/HashTableSeparateChaining";
import HashTableLinearProbing from "../src/directory/hashTableLinearProbing";
import { MyObj } from "../src/help";

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

const t2 = new HashTableLinearProbing<number, number>();
const A = "Smith";
const B = "Aaron";
const C = "Sue";
it("start empty", () => {
  expect(t2.isEmpty()).toBeTruthy();
});

it("generates hashcode", () => {
  // numbers
  expect(t2.hashCode(1)).toBe(1);
  expect(t2.hashCode(10)).toBe(10);
  expect(t2.hashCode(101)).toBe(101);
  expect(t2.hashCode(12)).toBe(12);
  // strings
  const t3 = new HashTableLinearProbing<string, number>();
  expect(t3.hashCode("1")).toBe(12);
  expect(t3.hashCode("10")).toBe(23);
  expect(t3.hashCode("100")).toBe(34);
  expect(t3.hashCode("1000")).toBe(8);
  expect(t3.hashCode("a")).toBe(23);
  expect(t3.hashCode("b")).toBe(24);

  // objects
  const t4 = new HashTableLinearProbing<object, object>();
  const myObjArr = [];
  for (let i = 1; i <= 5; i++) {
    myObjArr.push(new MyObj(i, i + 1));
  }
  expect(t4.hashCode(myObjArr[0])).toBe(1);
  expect(t4.hashCode(myObjArr[1])).toBe(3);
  expect(t4.hashCode(myObjArr[2])).toBe(5);
  expect(t4.hashCode(myObjArr[3])).toBe(7);
  expect(t4.hashCode(myObjArr[4])).toBe(9);
});

it("puts undefined and null keys and values", () => {
  const hashTable = new HashTableLinearProbing<string, number>();
  expect(hashTable.put("undefined", undefined)).toBeFalsy();
  expect(hashTable.put("null", null)).toBeFalsy();
  expect(hashTable.put(undefined, undefined)).toBeFalsy();
  expect(hashTable.put(null, null)).toBeFalsy();
  expect(hashTable.put("null", 1)).toBeTruthy();
  expect(hashTable.get("null")).toBe(1);
  expect(hashTable.get("1")).toBeUndefined();
});

it("无碰撞插入", () => {
  const min = 1;
  const max = 5;
  const size = max - min + 1;
  const hashTable = new HashTableLinearProbing<number, number>();
  for (let i = min; i <= max; i++) {
    expect(hashTable.put(i, i)).toBeTruthy();
  }
  expect(hashTable.size).toBe(size);
  const table = hashTable.getTable();
  for (let i = min; i <= max; i++) {
    expect(table[i].key).toBe(i);
    expect(table[i].value).toBe(i);
  }

  // 字符串作为 key
  const hashTable1 = new HashTableLinearProbing<string, number>();
  [1, 10, 100, 1000].forEach((i) => {
    expect(hashTable1.put(`${i}`, i)).toBeTruthy();
  });
  const table2 = hashTable1.getTable();
  expect(table2[12].key).toBe("1");
  expect(table2[12].value).toBe(1);
  expect(table2[23].key).toBe("10");
  expect(table2[23].value).toBe(10);
  expect(table2[34].key).toBe("100");
  expect(table2[34].value).toBe(100);
});
