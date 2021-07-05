// 给你一棵所有节点为非负值的二叉搜索树，请你计算树中任意两节点的差的绝对值的最小值。

var getMinimumDifference = function(root) {
  let pre  = -1, res = Number.MAX_SAFE_INTEGER
  dfs(root)
  function dfs(root) {
    if (!root) return
    dfs(root.left)
    if (pre !== -1) res = Math.min(res, root.val - pre)
    pre = root.val
    dfs(root.right)
  }
  return res
};
