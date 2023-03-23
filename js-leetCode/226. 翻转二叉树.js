// 定义二叉树节点的构造函数
function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

// 定义翻转二叉树的函数
function invertTree(root) {
  // 如果根节点为空，则返回 null
  if (root === null) {
    return null;
  }

  // 交换当前节点的左右子树
  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  // 递归地翻转左右子树
  invertTree(root.left);
  invertTree(root.right);

  // 返回翻转后的二叉树根节点
  return root;
}

// 创建一棵二叉树
const root = new Node(4);
root.left = new Node(2);
root.right = new Node(7);
root.left.left = new Node(1);
root.left.right = new Node(3);
root.right.left = new Node(6);
root.right.right = new Node(9);

// 翻转二叉树
const invertedRoot = invertTree(root);

// 输出翻转后的二叉树
console.log(invertedRoot);
