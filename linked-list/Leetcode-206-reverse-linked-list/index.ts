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
function reverseList(head: ListNode | null): ListNode | null {
  let ans: ListNode = {
    val: -1,
    next: null,
  };
  if (!head) {
    return head;
  }
  let curr: ListNode | null = head;
  while (curr) {
    let next = ans.next;
    ans.next = curr;
    curr = curr.next;
    ans.next.next = next;
  }
  return ans.next;
}
