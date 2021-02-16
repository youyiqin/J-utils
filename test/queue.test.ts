import Queue from "../src/queue/index";
import DoubuleSideQueue from "../src/queue/doubleSideQueue";

it("data struct queue basic test", () => {
  const q = new Queue();
  expect(q.dequeue()).toBeUndefined();
  q.enqueue("a");
  expect(q.peek()).toBe("a");
  expect(q.isEmpty()).toBeFalsy();
  expect(q.dequeue()).toBe("a");
  expect(q.isEmpty()).toBeTruthy();
  q.enqueue("1");
  q.enqueue("2");
  expect(q.toString()).toBe("1,2");
  expect(q.dequeue()).toBe("1");
  expect(q.size()).toBe(1);
  q.clear();
  expect(q.isEmpty()).toBeTruthy();
});

it("double side queue test", () => {
  const dq = new DoubuleSideQueue();
  dq.addBack("John");
  dq.addBack("Aaron");
  expect(dq.size()).toBe(2);
  expect(dq.toString()).toBe("John,Aaron");
  expect(dq.isEmpty()).toBeFalsy();
  expect(dq.removeBack()).toBe("Aaron");
  expect(dq.peekBack()).toBe("John");
  expect(dq.peekFront()).toBe("John");
});
