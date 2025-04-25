class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * time: O(n)
 * space: O(n)
 */
function detectCycle(head: ListNode | null): ListNode | null {
  if (!head) {
    return head;
  }
  const visited = new WeakMap();
  let curr: ListNode | null = head;
  let pos = 0;
  while (curr) {
    if (visited.has(curr)) {
      return curr;
    }
    visited.set(curr, pos);
    pos++;
    curr = curr.next;
  }
  return null;
}
