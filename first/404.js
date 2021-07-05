// 计算给定二叉树的所有左叶子之和。

var sumOfLeftLeaves = function(root) {
  let sum = 0
  deep(root, 0)
  function deep(root, type) {
    if (!root) return null
    if (type === 1 && !root.left && !root.right) sum = sum + root.val
    deep(root.left, 1)
    deep(root.right, 0)
  }
  return sum
};
