/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null,
): ListNode | null {
  let curr = headA;
  let curr2 = headB;
  let visited = new WeakSet();
  while (curr || curr2) {
    if (curr) {
      if (visited.has(curr)) {
        return curr;
      }
      visited.add(curr);
      curr = curr.next;
    }
    if (curr2) {
      if (visited.has(curr2)) {
        return curr2;
      }
      visited.add(curr2);
      curr2 = curr2.next;
    }
  }
  return null;
}
