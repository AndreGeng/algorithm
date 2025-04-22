/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

interface ListNode {
  val: number;
  next: ListNode | null;
}

/**
 * time complexity: O(n^2)
 * space complexity: O(1)
 */

// const sortList = (head: ListNode | null) => {
//   let newHead: ListNode = {
//     val: -Infinity,
//     next: null,
//   };
//   let curr: ListNode | null = head;
//   while (curr) {
//     let newCurr: ListNode | null = newHead;
//     let newCurrPre = newCurr;
//     while (newCurr) {
//       if (newCurr.val < curr.val) {
//         newCurrPre = newCurr;
//         newCurr = newCurr.next;
//         continue;
//       }
//       break;
//     }
//     const next = curr.next;
//     curr.next = newCurr;
//     newCurrPre.next = curr;
//     curr = next;
//   }
//   return newHead.next;
// };

/**
 * time complexity: O(nlog(n))
 * space complexity: O(1)
 */
const sortList = (head: ListNode | null) => {
  if (!head) {
    return head;
  }
  let val = head.val;
  let curr = head.next;
  let leftList: ListNode | null = {
    val: -Infinity,
    next: null,
  };
  let rightList: ListNode | null = {
    val: -Infinity,
    next: null,
  };
  let leftListTail = leftList;
  let rightListTail = rightList;
  while (curr) {
    if (curr.val < val) {
      leftListTail.next = curr;
      curr = curr.next;
      leftListTail = leftListTail.next;
      leftListTail.next = null;
    } else {
      rightListTail.next = curr;
      curr = curr.next;
      rightListTail = rightListTail.next;
      rightListTail.next = null;
    }
  }
  leftList = sortList(leftList.next);
  rightList = sortList(rightList.next);
  curr = {
    val,
    next: rightList,
  };
  let leftTail = leftList;
  if (leftTail) {
    while (leftTail.next) {
      leftTail = leftTail.next;
    }
    leftTail.next = curr;
    return leftList;
  }
  return curr;
};

let head = {
  val: 4,
  next: {
    val: 2,
    next: {
      val: 1,
      next: {
        val: 3,
        next: null,
      },
    },
  },
};

console.log(JSON.stringify(sortList(head), null, 2));

let head2 = {
  val: -1,
  next: {
    val: 5,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 0,
          next: null,
        },
      },
    },
  },
};

console.log(JSON.stringify(sortList(head2), null, 2));

let head3 = null;
console.log(JSON.stringify(sortList(head3), null, 2));
