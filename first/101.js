// 给定一个二叉树，检查它是否是镜像对称的。

var isSymmetric = function(root) {
  function isSmall(left, right) {
    if (!left && !right) return true
    if (!left ||!right) return false
    if (left.val !== right.val) return false
    return isSmall(left.left, right.right) &&  isSmall(left.right, right.left)
  }
  return isSmall(root.left, root.right)
};
