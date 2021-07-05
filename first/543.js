// 给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。


var diameterOfBinaryTree = function(root) {
  if (root ===null) return 0
  let left = diameterOfBinaryTree(root.left)
  let right = diameterOfBinaryTree(root.right)
  function height(root) {
    return root === null ? 0 : Math.max(height(root.left), height(root.right)) + 1
  }
  return Math.max(height(root.left) + height(root.right), left, right)
};
