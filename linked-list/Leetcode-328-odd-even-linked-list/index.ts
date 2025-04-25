class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head) {
    return head;
  }
  let oddHead = head;
  let oddCurr = oddHead;
  let evenHead = head.next;
  let evenCurr = evenHead;
  while (oddCurr.next || evenCurr?.next) {
    if (oddCurr) {
      oddCurr.next = oddCurr.next?.next || null;
      if (oddCurr.next) {
        oddCurr = oddCurr.next;
      }
    }
    if (evenCurr) {
      evenCurr.next = evenCurr.next?.next || null;
      if (evenCurr.next) {
        evenCurr = evenCurr.next;
      }
    }
  }
  oddCurr.next = evenHead;
  return oddHead;
}
