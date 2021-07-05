// 给定一个二叉树，返回它的 后序 遍历。

var postorderTraversal = function(root) {
  let arr = [], res = [], pre = null
  while (root || arr.length) {
    while (root) {
      arr.push(root)
      root = root.left
    }
    root = arr.pop()
    if (!root.right || root.right === pre) {
      res.push(root.val)
      pre = root
      root = none
    }else {
      root.push(root)
      root = root.right
    }
  }
};
