// 给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 个最小元素（从 1 开始计数）。

var kthSmallest = function(root, k) {
  let arr = [],n = 0
  while (arr.length || root) {
    while (root) {
      arr.push(root)
      root = root.left
    }
    n++
    root = arr.pop()
    if (n === k) return root.val
    root = root.right
  }
  return false
};
