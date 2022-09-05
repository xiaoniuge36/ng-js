/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function (l1, l2) {
    let dummy = new ListNode(-1);
    let carry = 0;
    let p = dummy;
    while (l1 || l2 || carry) {
      let num = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
      p.next = new ListNode(num % 10);
      carry = ~~(num / 10);
      p = p.next;
      if (l1) l1 = l1.next;
      if (l2) l2 = l2.next;
    }
    return dummy.next;
  };
  
  //1