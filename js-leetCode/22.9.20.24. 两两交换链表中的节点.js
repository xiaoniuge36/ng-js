class Node{
    constructor(next)
    {
        this.next = next;
    }
}

var swapPairs = function(head) {
    let dummy_head = new Node(head);
    let cur = dummy_head;
    while(cur.next !== null &&cur.next.next !== null)
    {
        let temp = cur.next;
        let temp1 = cur.next.next.next;
        cur.next = cur.next.next;
        cur.next.next = temp;
        temp.next = temp1;
        cur = cur.next.next;
    }
    return dummy_head.next;
};

