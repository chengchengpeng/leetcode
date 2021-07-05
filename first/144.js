// 给你二叉树的根节点 root ，返回它节点值的 前序 遍历

var preorderTraversal = function(root) {
  let arr = [], res = [], item = null
if (root) {
    arr.push(root)
  while (arr.length) {
    item = arr.pop()
    res.push(item.val)
    if (item.right) {
      arr.push(item.right)
    }
    if (item.left) {
      arr.push(item.left)
    }
  }
}
   return res
};
