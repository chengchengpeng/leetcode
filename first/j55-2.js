// 输入一棵二叉树的根节点，判断该树是不是平衡二叉树。如果某二叉树中任意节点的左右子树的深度相差不超过1，
// 那么它就是一棵平衡二叉树。
var isBalanced = function(root) {
  function dfs(root) {
    if (!root) return 0
    let left =dfs(root.left)
    let right = dfs(root.right)
    if (left === -1 || right === -1 || Math.abs(left-right) > 1) {
      return -1
    }
    return Math.ceil(left, right) + 1
  }
  return dfs(root) >= 0
};
