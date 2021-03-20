import HashTable from "../src/directory/hashTable";
import HashTableSeparateChaining from "../src/directory/HashTableSeparateChaining";
import HashTableLinearProbing from "../src/directory/hashTableLinearProbing";
import { MyObj } from "../src/help";

// test the hashTableLinearProbing-lazy class
import HashTableLinearProbingLazy from "../src/directory/hashTableLinearProbing-lazy";

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
const A = "Jamie";
const B = "Jonathan";
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

function addValuesCollision() {
  const hashTable = new HashTableLinearProbing<string, String>();
  expect(hashTable.put(A, `${A}@qq.com`)).toBeTruthy();
  expect(hashTable.put(B, `${B}@qq.com`)).toBeTruthy();
  expect(hashTable.put(C, `${C}@qq.com`)).toBeTruthy();
  expect(hashTable.size).toBe(3);

  const expectedHash = 5;
  expect(hashTable.hashCode(A)).toBe(expectedHash);
  expect(hashTable.hashCode(B)).toBe(expectedHash);
  expect(hashTable.hashCode(C)).toBe(expectedHash);

  expect(hashTable.get(A)).toBe(`${A}@qq.com`);
  expect(hashTable.get(B)).toBe(`${B}@qq.com`);
  expect(hashTable.get(C)).toBe(`${C}@qq.com`);
  expect(hashTable.remove(A)).toBeTruthy();
  expect(hashTable.remove(A)).toBeFalsy();
  expect(hashTable.remove(B)).toBeTruthy();
  expect(hashTable.remove(B)).toBeFalsy();
  expect(hashTable.remove(C)).toBeTruthy();
  expect(hashTable.remove(C)).toBeFalsy();
}

// eslint-disable-next-line
it("检查碰撞添加值", addValuesCollision);

it("satrts empty", () => {
  const hashTable = new HashTableLinearProbingLazy();
  expect(hashTable.isEmpty()).toBeTruthy();
  expect(hashTable.size).toBe(0);
});

it("generates hashCode", () => {
  const hashTable: any = new HashTableLinearProbingLazy();
  // numbers
  expect(hashTable.hashCode(1)).toBe(1);
  expect(hashTable.hashCode(10)).toBe(10);
  expect(hashTable.hashCode(100)).toBe(100);
  // strings
  expect(hashTable.hashCode("1")).toBe(12);
  expect(hashTable.hashCode("10")).toBe(23);
  expect(hashTable.hashCode("100")).toBe(34);
  expect(hashTable.hashCode("a")).toBe(23);
  // objects
  const hb = new HashTableLinearProbingLazy<MyObj, MyObj>();
  const myObjList: MyObj[] = [];
  for (let i = 1; i < 6; i++) {
    myObjList.push(new MyObj(i, i + 1));
  }
  expect(hb.hashCode(myObjList[0])).toBe(1);
  expect(hb.hashCode(myObjList[1])).toBe(3);
  expect(hb.hashCode(myObjList[2])).toBe(5);
  expect(hb.hashCode(myObjList[3])).toBe(7);
  expect(hb.hashCode(myObjList[4])).toBe(9);
});

it("put undefined and null keys and values", () => {
  const hashTable = new HashTableLinearProbingLazy<string, number>();
  expect(hashTable.put("undefined", undefined)).toBeFalsy();
  expect(hashTable.put("undefined", null)).toBeFalsy();
  expect(hashTable.put(undefined, undefined)).toBeFalsy();
  expect(hashTable.put(null, undefined)).toBeFalsy();
  expect(hashTable.put("undefined", 1)).toBeTruthy();
  expect(hashTable.get("undefined")).toBe(1);
  expect(hashTable.put("null", 1)).toBeTruthy();
  expect(hashTable.get("null")).toBe(1);
});

it("put values with collisions", () => {
  const hashTable = new HashTableLinearProbingLazy<unknown, unknown>();
  expect(hashTable.put("1", "1")).toBeTruthy();
  expect(hashTable.put(12, 12)).toBeTruthy();
  expect(hashTable.get(12)).toBe(12);
  expect(hashTable.get("1")).toBe("1");
  expect(hashTable.remove(12)).toBeTruthy();
  expect(hashTable.size).toBe(1);
  hashTable.clear();
  expect(hashTable.isEmpty()).toBeTruthy();
});

it("test toString function", () => {
  const hashTable = new HashTableLinearProbingLazy<number, number>();
  expect(hashTable.put(1, 1)).toBeTruthy();
  expect(hashTable.put(2, 2)).toBeTruthy();
  expect(hashTable.toString()).toBe("{1 => [#1: 1]}, {2 => [#2: 2]}");
});
