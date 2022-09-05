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

// 两数之和

let twoSum = function (nums, target) { //nums是一个数组
  for (let i = 0; i < nums.length; i++) { //遍历数组
    let suntarget = target - nums[i]; //目标值减去当前数
    let index = nums.indexOf(suntarget); //查找目标值减去当前数的索引
    if (index !== -1 && index !== i) { //如果索引不等于-1，且索引不等于当前索引
      return [i, index]; //返回索引数组
    }
  }
}
