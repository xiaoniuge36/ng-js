//817. 链表组件
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 */
//重点是理解题意 思维的转变 试着头脑中过一遍就比较好理解
 var numComponents = function(head, nums) { // 1. 遍历链表，判断链表节点是否在数组中，如果在，判断下一个节点是否在数组中，如果在，计数器+1如果不在，继续遍历
    let set = new Set(nums); 
    let cur = head;//当前节点
    let res = 0; //计数器
    while (cur) {
        // 如果当前节点在数组中，判断下一个节点是否在数组中，如果在，计数器+1，如果不在，继续遍历
        // cur.val在数组中，cur.next.val不在数组中，计数器+1
        // cur.val 意思是当前节点的值
        if (set.has(cur.val) && (cur.next == null || !set.has(cur.next.val))) {
            res++;
        }
        cur = cur.next;
    }
    return res;
};

