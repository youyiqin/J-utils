// import LinkedList from "./LinkedList";
// import { Node } from "./types/index";

// const swapPairs = (head: Node) => {
//   if (!head || !head.next) return head;
//   let current = head;
//   const newHead = current.next;
//   while (current && current.next) {
//     const { next } = current;
//     current.next = next.next;
//     next.next = current;
//     current = current.next;
//   }
//   return newHead;
// };

// const l = new LinkedList();
// l.add(1);
// l.add(2);
// l.add(3);
// l.add(4);
// l.toString();
// const head = l.getHead();
// swapPairs(head);
// l.toString();
export default function add(a: number, b: number) {
  return a + b 
}
