class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number,
): ListNode | null {
  let idx = 1;
  let curr = head;
  let newHead: ListNode = { val: -1, next: null };
  let newTail: ListNode | null = null;
  while (curr) {
    let next = curr.next;
    if (idx === left - 1) {
      newHead = curr;
    } else if (idx === left) {
      newTail = curr;
    } else if (idx > left && idx <= right) {
      curr.next = newHead.next;
      newHead.next = curr;
    }
    if (idx === right && newTail) {
      newTail.next = next;
      break;
    }
    curr = next;
    idx++;
  }
  return head;
}
