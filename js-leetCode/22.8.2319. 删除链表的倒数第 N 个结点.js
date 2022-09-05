var removeNthFromEnd = function (head, n) { // 删除链表的倒数第 N 个结点
    let dummy = new ListNode(); // 创建一个虚拟头结点
    dummy.next = head; // 虚拟头结点指向链表的第一个结点
    let n1 = dummy; // n1指向虚拟头结点
    let n2 = dummy; // n2指向虚拟头结点
    for (let i = 0; i <= n; i++) {//n2移动n+1次 
        n2 = n2.next; // n2指向链表的第n+1个结点
    }
    while (n2 !== null) {//同时移动n1，n2
        n1 = n1.next; // n1指向链表的第n个结点
        n2 = n2.next; // n2指向链表的第n+1个结点
    }
    n1.next = n1.next.next;//删除元素
    return dummy.next; // 返回链表的第一个结点
};
