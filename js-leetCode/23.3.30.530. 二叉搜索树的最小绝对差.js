/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
  // 初始化最小绝对差为正无穷大
  let minDiff = Infinity;
  // 初始化一个前驱节点指针，初始为null
  let prevNode = null;

  // 定义一个中序遍历的递归函数
  const inorderTraversal = (node) => {
    if (!node) {
      return;
    }
    // 先遍历左子树
    inorderTraversal(node.left);
    if (prevNode !== null) {
      // 如果前驱节点存在，则更新最小绝对差
      minDiff = Math.min(minDiff, Math.abs(node.val - prevNode.val));
    }
    // 更新前驱节点指针
    prevNode = node;
    // 最后遍历右子树
    inorderTraversal(node.right);
  };

  // 从根节点开始中序遍历
  inorderTraversal(root);

  // 返回最小绝对差
  return minDiff;
};
