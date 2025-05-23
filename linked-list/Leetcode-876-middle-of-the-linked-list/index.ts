/**
 * Definition for singly-linked list.
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function middleNode(head: ListNode | null): ListNode | null {
  let fast = head;
  let slow = head;
  if (!head) {
    return head;
  }
  while (fast && fast.next) {
    slow = slow?.next || null;
    fast = fast.next.next || null;
  }

  return slow;
}
