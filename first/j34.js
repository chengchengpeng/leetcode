// 输入一棵二叉树和一个整数，打印出二叉树中节点值的和为输入整数的所有路径。
// 从树的根节点开始往下一直到叶节点所经过的节点形成一条路径。

var pathSum = function(root, target) {
  let arr = [], tem = [], sum = 0
  dfs(root)
  function dfs(root) {
    if (!root) return
    sum = sum + root.val
    tem.push(root.val)
    if (sum === target && !root.left && !root.right) arr.push(JSON.parse(JSON.stringify(tem)))
    dfs(root.left)
    dfs(root.right)
    sum = sum - root.val
    tem.pop()
  }
  return arr
};
