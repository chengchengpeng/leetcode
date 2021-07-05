// 给定一个二叉树的根节点 root ，返回它的 中序 遍历。

var inorderTraversal = function(root) {
  let arr = [], res = []
  while (arr.length || root) {
    while (root) {
      arr.push(root)
      root = root.left
    }
    root  = arr.pop()
    res.push(root.val)
    root = root.right
  }
  return res
};
