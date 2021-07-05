// 给定一个二叉搜索树和一个目标结果，如果 BST 中存在两个元素且它们的和等于给定的目标结果，则返回 true。

var findTarget = function(root, k) {
  let arr = [], pre= null, set = new Set()
  while (root || arr.length) {
    while (root) {
      arr.push(root)
      root = root.left
    }
    root = arr.pop()
    if (!root.right || root.right === pre) {
      if (set.has(k-root.val)) {
        return true
      }else {
        set.add(root.val)
      }
      pre = root
      root = null
    }else {
      arr.push(root)
      root = root.right
    }
  }
  return false
};
