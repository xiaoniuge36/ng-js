function removeNthFromEnd(head, n) {
  let fast = head; // 快指针
  let slow = head; // 慢指针
  let prev = null; // 前一个节点

  for (let i = 0; i < n; i++) {
    // 快指针先走n步
    fast = fast.next;
  }

  while (fast !== null) {
    // 快指针和慢指针同时走，直到快指针到达链表尾部
    prev = slow; // 记录前一个节点
    slow = slow.next; // 慢指针向前移动
    fast = fast.next; // 快指针向前移动
  }

  if (prev === null) {
    // 如果要删除的是头节点
    head = head.next; // 直接将头节点指向下一个节点
  } else {
    prev.next = slow.next; // 将前一个节点的next指向要删除节点的下一个节点
  }

  return head; // 返回头节点
}
