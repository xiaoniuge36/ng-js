console.log('22.8.9 21. 合并两个有序链表');
// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}
//递归 将两个链表合并成一个有序链表
//合并两个有序链表
function mergeTwoLists(l1, l2) {//l1,l2为链表
    if (l1 == null) return l2;//如果l1为空，返回l2
    if (l2 == null) return l1;//如果l2为空，返回l1
    //l1.val 表示 l1的当前结点的值 l1.next 表示 l1的头结点的下一个结点
    if (l1.val < l2.val) {//如果l1的值小于l2的值，则将l1的下一个节点与l2合并
        //mergeTwoLists  合并两个有序链表
        l1.next = mergeTwoLists(l1.next, l2);//l1的下一个节点与l2合并
        return l1;//返回l1
    } else {//如果l1的值大于l2的值，则将l2的下一个节点与l1合并
        l2.next = mergeTwoLists(l1, l2.next);//l2的下一个节点与l1合并
        return l2;//返回l2
    }
}

