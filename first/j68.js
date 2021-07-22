// 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

// 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

var lowestCommonAncestor = function (root, p, q) {
  let res
  dfs(root)
  function dfs(root) {
    if (!root) return false
    let left = dfs(root.left)
    let right = dfs(root.right)
    if ((left && right) || (root.val === p.val || root.val === q.val) && (left || right)){
      res = root
    }
    return left || right || (root.val===p.val) || (q.val === root.val)
  }
  return res
};
