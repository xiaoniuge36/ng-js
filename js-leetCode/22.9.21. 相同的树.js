/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
    if(p==null && q==null) return true; //两个都为空
    if(p==null || q==null) return false; //一个为空一个不为空
    if(p.val!=q.val) return false; //两个都不为空，但是值不相等
    return isSameTree(p.left,q.left) && isSameTree(p.right,q.right); //递归

};