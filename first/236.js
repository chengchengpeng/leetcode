// 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

// 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，
// 最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。
var lowestCommonAncestor = function(root, p, q) {
  let res = null
  dfs(root)
  function dfs (root) {
    if (!root) return false
    let lson = dfs(root.left)
    let rson = dfs(root.right)
    if (lson && rson || ((root.val === p.val || root.val === q.val) && (lson || rson))) {
      res = root
    }
    return lson || rson || root.val === p.val || root.val === q.val
  }
  return res
};


let ans;
    const dfs = (root, p, q) => {
        if (root === null) return false;
        const lson = dfs(root.left, p, q);
        const rson = dfs(root.right, p, q);
        if ((lson && rson) || ((root.val === p.val || root.val === q.val) && (lson || rson))) {
            ans = root;
        }
        return lson || rson || (root.val === p.val || root.val === q.val);
    }
    dfs(root, p, q);
    return ans;

