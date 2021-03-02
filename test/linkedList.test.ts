import LinkedList from "../src/linkedList/index";
import DoublyLinkedList from "../src/linkedList/doublyLinkedList";

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

const doublyL = new DoublyLinkedList();
it("doubly linkedlist data structure", () => {
  expect(doublyL.isEmpty()).toBeTruthy();
  doublyL.push(1);
  doublyL.push(2);
  doublyL.push(3);
  expect(doublyL.toString()).toBe("1,2,3");
  doublyL.insert(0, 0);
  expect(doublyL.toString()).toBe("0,1,2,3");
});
